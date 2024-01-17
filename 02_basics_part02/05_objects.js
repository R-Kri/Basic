// De-Structure of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor // Instead of writing this again and again to print multiple time we can use -
const {courseInstructor: instructor} = course // Here we have de-structured the courseInstructor name to instructor. We can call the value stored in courseInstructor by instructor.
// console.log(courseInstructor);
console.log(instructor);

// this is how we write JSON
// {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "free"
// }