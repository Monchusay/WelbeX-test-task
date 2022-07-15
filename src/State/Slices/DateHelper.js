export const filterDate = (proxyGoods, filtratedValue, condition) => {
  if (isNaN(Date.parse(filtratedValue)) || condition === ".includes") {
    return [];
  }
  const goods = JSON.parse(JSON.stringify(proxyGoods));
  return goods.filter((g) =>
    eval(
      `${Date.parse(g.publishDate)} ${condition} ${Date.parse(filtratedValue)}`
    )
  );
};
export const filterName = (proxyGoods, filtratedValue, condition) => {
  if (condition === ">=" || condition === "<=") {
    return [];
  }
  const goods = JSON.parse(JSON.stringify(proxyGoods));
  return goods.filter((g) => {
    if (condition === ".includes") {
      return g.name.toLowerCase().includes(filtratedValue.toLowerCase());
    }
    return g.name.toLowerCase() === filtratedValue.toLowerCase();
  });
};
export const filterAmount = (proxyGoods, filtratedValue, condition) => {
  if (condition === ".includes") {
    return [];
  }
  const goods = JSON.parse(JSON.stringify(proxyGoods));
  return goods.filter((g) =>
    eval(`${g.amount} ${condition} ${filtratedValue}`)
  );
};
export const filterDistance = (proxyGoods, filtratedValue, condition) => {
    if (condition === ".includes") {
        return [];
    }
    const goods = JSON.parse(JSON.stringify(proxyGoods));
    return goods.filter((g) =>
        eval(`${g.distance} ${condition} ${filtratedValue}`)
    );
};
