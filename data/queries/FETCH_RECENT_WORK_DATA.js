export const FETCH_RECENT_WORK_DATA = `
  *[_type == "recentWork" && isActive == true][0]{
    heading,
    subheading,
    "image": image.asset->url,
    recentWorkheading,
    recentPieces[]{
      title,
      description,
      "image": image.asset->url,
      category
    }
  }
`;
