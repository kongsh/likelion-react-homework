interface RequiredMatches {
  title: string;
  description: string;
  tags: string[];
  readTime: string;
  writeTime: string;
}

function getMatches<T extends RequiredMatches[]>(list: T, search: string): T {
  const words = search.split(' ').map((word) => word.toLowerCase().trim());

  const result = list.filter((book) =>
    words.every(
      (word) =>
        book.tags.some((tag) => tag.toLowerCase() === word) ||
        book.title.toLowerCase().includes(word) ||
        book.description.toLowerCase().includes(word)
    )
  );

  return result as T;
}

export default getMatches;
