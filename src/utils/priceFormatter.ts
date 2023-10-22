const formatPrice = (price?: number) => {
  if (!price) {
    return '0*';
  }

  return price.toLocaleString('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  });
};

export const PriceFormatter = {
  formatPrice,
};
