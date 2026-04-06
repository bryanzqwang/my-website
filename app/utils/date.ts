export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string): string {
  const parts = dateString.split("-");
  if (parts.length === 3) {
    const [year, month, day] = parts;
    const date = new Date(`${year}-${month}-${day}T00:00:00Z`);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  return dateString;
}
