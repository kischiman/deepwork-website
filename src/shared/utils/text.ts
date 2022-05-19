export const separateCamelCase = (value: string): string => {
  const result = value.replace(/([A-Z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1)
}

export const convertSpacesToDash = (value: string): string => value.toLowerCase().replace(' ', '-')
