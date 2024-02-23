import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;
export const AUTHORS_QUERY = groq`*[_type == "author" && defined(slug)]`;
export const AUTHOR_REF_QUERY = groq`*[_type == "post" && defined(slug)] {
  "_ref": author._ref
}`;

export const AUTHOR_PROFILE_QUERY = groq`*[_type == "author" && defined(slug)] {
  _id,
  image
}`
