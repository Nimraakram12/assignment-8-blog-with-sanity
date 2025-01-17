import { defineField, defineType } from "sanity"

const postType = defineType({
    title: "POST",
    name: "post",
    type: "document",
    fields: [
       defineField({
        title: "Post Title",
        name: "post_title",
        type: "string"
       }),
       defineField({
        title: "Post Description",
        name: "post_desc",
        type: "string"
       })
    ]
})

export default postType