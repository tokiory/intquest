export const createQuestionSlug = (section: string) => {
  return (slug: string) => {
    return `${section}-${slug}`;
  }
}
