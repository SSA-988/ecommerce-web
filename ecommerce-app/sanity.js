import { createClient } from "next-sanity";

export const client = createClient({
    projectId:"rowtjrgb",
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-01-01",
    token:"skAkHvcyei9C16sF5WLBjmZaEnGkdhIZeq63U4FyYf319lP2UwKWVjNRhyDnN1bEX2X6yrSA13FtGkywWrnJ1kXpldTi6I3owfwBDg57D3sGYmQ0RwJQjQ8UXfR7wYfuh4VIktGqoNVMZzb0N1JTwA7ZpRILqXZsmGEdrs0S1utBHretYCyr"
})