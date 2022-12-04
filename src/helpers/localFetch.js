import galleryJson from './gallery.json';

function getCollectionData(count, type, category) {
  const items = galleryJson;
  const filteredType = items.filter((item) => item.type.includes(type));
  const filteredTypeAndCategory = filteredType.filter((item) => item.category.includes(category));
  const filtered = filteredTypeAndCategory ?? filteredType;
  return filtered.slice(0, count);
}

function getCollectionItemData(slug) {
  let filteredItem;
  if (slug) {
    const items = galleryJson;
    filteredItem = items.find((item) => item.slug === slug);
  }
  return filteredItem;
}

export { getCollectionData, getCollectionItemData };
