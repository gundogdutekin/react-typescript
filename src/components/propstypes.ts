export type CoursesProps = {
    courses: {
        name: string,
        price: number
    }[]
       
}
export type RequestProps = {
    status: "loading" | "success" | "error"
}
export type CourseProps={
    course: {
        name: string,
        price: number
    }
}
export type HomeProps={
    name: string,
    coursenumber: number,
    admininfo: {
      name: string,
      coursenumber: number
  }
}