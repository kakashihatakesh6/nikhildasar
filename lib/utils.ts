import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a UTC date to Indian Standard Time (IST) 
 * IST is UTC+5:30
 */
export function convertToIST(date: Date): Date {
  return new Date(date.getTime() + (5.5 * 60 * 60 * 1000));
}

/**
 * Formats a date in IST timezone
 */
export function formatISTDate(date: Date): string {
  const istDate = convertToIST(date);
  return istDate.toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium', 
    timeStyle: 'medium' 
  });
}

/**
 * Converts IST date to UTC for database storage
 */
export function convertISTtoUTC(istDate: Date): Date {
  return new Date(istDate.getTime() - (5.5 * 60 * 60 * 1000));
}

/**
 * Gets current time in IST
 */
export function getCurrentISTTime(): Date {
  return convertToIST(new Date());
}

/**
 * Formats an IST date as YYYY-MM-DD
 */
export function formatISTDateOnly(date: Date): string {
  const istDate = convertToIST(date);
  return istDate.toLocaleDateString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

/**
 * Formats an IST time as HH:MM:SS
 */
export function formatISTTimeOnly(date: Date): string {
  const istDate = convertToIST(date);
  return istDate.toLocaleTimeString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}
