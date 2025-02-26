import { clsx, type ClassValue } from "clsx" 
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)) 
}

export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int 
}

export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')

// Update the CURRENCY_FORMATTER to use 'Ksh' as the currency symbol
const CURRENCY_FORMATTER = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES',
  minimumFractionDigits: 2,
  // Add these options to customize the currency display
  currencyDisplay: 'narrowSymbol'
});

export function formatCurrency(amount: number) {
  // Replace the $ symbol with Ksh in the formatted string
  return CURRENCY_FORMATTER.format(amount).replace('KSh', 'Ksh')
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en-KE') 
export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number) 
}

export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100

export const generateId = () =>
  Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)).join('')
