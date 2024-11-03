"use strict";
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 34,
        name: "x",
        email: "example@example.com",
        devType: "NLDW"
    });
    const student2 = addCourseToStudent({
        id: 32,
        name: "y",
        email: "example@example.com",
        handWatch: "apple"
    });
}
