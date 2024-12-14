export const formatDate = (date) => {
    const formatted = date.toLocaleDateString("en-GB").replace(/\//g, "");
    const [day, month, year] = [
      formatted.substring(0, 2),
      formatted.substring(2, 4),
      formatted.substring(4, 8),
    ];
    return `${year}${month}${day}`;
  };