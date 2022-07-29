const mapStories = {
   top: "news",
   new: "newest",
   show: "show",
   ask: "ask",
   job: "jobs",
};

const get = (path) =>
   $fetch(path, {
      headers: { "User-Agent": "chrome" },
   });
// const get = async (path) => {
//    const { data } = await useFetch(path, {
//       headers: { "User-Agent": "chrome" }
//    })
//    return data.value
// }

export function useGetStory(id) {
   return get(`https://node-hnapi.herokuapp.com/item/${id}`);
}
export function useGetUser(id) {
   return get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
}
export function useGetStories(type, page) {
   // console.log("type", type, "page", page)
   const l = mapStories[type];
   if (!l) return [];
   return get(`https://node-hnapi.herokuapp.com/${l}?page=${page}`);
}
