export function searchCrumbs(crumbs = [], search) {
  const termList = search.split(' ').map((t) => t.toUpperCase());

  return crumbs.filter(
    (l) =>
      termList.some((t) => l.message.toUpperCase().includes(t)) ||
      termList.some((t) => l.category.toUpperCase().includes(t))
  );
}

export function searchErrors(errors = [], search) {
  const termList = search.split(' ').map((t) => t.toUpperCase());

  return errors.filter((l) =>
    termList.some(
      (t) =>
        l.error.message.toUpperCase().includes(t) ||
        l.error.name.toUpperCase().includes(t) ||
        l.tags.some((tag) => tag.toUpperCase().includes(t))
    )
  );
}
