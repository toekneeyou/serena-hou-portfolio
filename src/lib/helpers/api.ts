export const strokeLinejoinAndCategories = async () => {
  const response = await sanityClient.fetch(`*[_type == "videoCategory"]{
      _id,
      name,
      title,
      video[]->{
        _id,
        name,
        "thumbnailUrl": thumbnail.asset->url,
        category->{
          _id,
        }
      },
    }
  `);
  handleNoResults(response);
  return response;
};
