"use client"

import * as React from "react"

// Define SonnerActionElement and SonnerProps locally
type SonnerActionElement = React.ReactElement<{
  onClick: () => void;
  children: React.ReactNode;
}>;

type SonnerProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: SonnerActionElement;
  variant?: "default" | "destructive";
};

const SONNER_LIMIT = 1;
const SONNER_REMOVE_DELAY = 1000000;

type SonnerToast = SonnerProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: SonnerActionElement;
};

// Define ActionType directly as a type
type ActionType = {
  ADD_SONNER: "ADD_SONNER";
  UPDATE_SONNER: "UPDATE_SONNER";
  DISMISS_SONNER: "DISMISS_SONNER";
  REMOVE_SONNER: "REMOVE_SONNER";
};

type Action =
  | {
      type: ActionType["ADD_SONNER"];
      sonner: SonnerToast;
    }
  | {
      type: ActionType["UPDATE_SONNER"];
      sonner: Partial<SonnerToast>;
    }
  | {
      type: ActionType["DISMISS_SONNER"];
      sonnerId?: SonnerToast["id"];
    }
  | {
      type: ActionType["REMOVE_SONNER"];
      sonnerId?: SonnerToast["id"];
    };

interface State {
  sonners: SonnerToast[];
}

const sonnerTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

let count = 0; // Global counter for generating unique IDs

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}


const addToRemoveQueue = (sonnerId: string) => {
  if (sonnerTimeouts.has(sonnerId)) {
    return;
  }

  const timeout = setTimeout(() => {
    sonnerTimeouts.delete(sonnerId);
    dispatch({
      type: "REMOVE_SONNER",
      sonnerId: sonnerId,
    });
  }, SONNER_REMOVE_DELAY);

  sonnerTimeouts.set(sonnerId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_SONNER":
      return {
        ...state,
        sonners: [action.sonner, ...state.sonners].slice(0, SONNER_LIMIT),
      };

    case "UPDATE_SONNER":
      return {
        ...state,
        sonners: state.sonners.map((t) =>
          t.id === action.sonner.id ? { ...t, ...action.sonner } : t
        ),
      };

    case "DISMISS_SONNER": {
      const { sonnerId } = action;

      // ! Side effects ! - This could be extracted into a dismissSonner() action,
      // but I'll keep it here for simplicity
      if (sonnerId) {
        addToRemoveQueue(sonnerId);
      } else {
        state.sonners.forEach((sonner) => {
          addToRemoveQueue(sonner.id);
        });
      }

      return {
        ...state,
        sonners: state.sonners.map((t) =>
          t.id === sonnerId || sonnerId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case "REMOVE_SONNER":
      if (action.sonnerId === undefined) {
        return {
          ...state,
          sonners: [],
        };
      }
      return {
        ...state,
        sonners: state.sonners.filter((t) => t.id !== action.sonnerId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { sonners: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Sonner = Omit<SonnerToast, "id">;

function sonner({ ...props }: Sonner) {
  const id = genId();

  const update = (props: SonnerToast) =>
    dispatch({
      type: "UPDATE_SONNER",
      sonner: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_SONNER", sonnerId: id });

  dispatch({
    type: "ADD_SONNER",
    sonner: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useSonner() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    sonner,
    dismiss: (sonnerId?: string) => dispatch({ type: "DISMISS_SONNER", sonnerId }),
  };
}

export { useSonner, sonner };