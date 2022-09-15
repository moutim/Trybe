file = open("students-grades.txt", mode="w")
students = [
    "Marcos 10\n",
    "Felipe 4\n",
    "José 6\n",
    "Ana 10\n",
    "Maria 9\n",
    "Miguel 5\n",
]
file.writelines(students)
file.close()

studentsReproved = []
with open("students-grades.txt") as grades_file:
    for student in grades_file:
        student_grade = student.split(" ")
        print(student_grade)
        if int(student_grade[1]) < 6:
            studentsReproved.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(studentsReproved)
    recuStudentsFile.writelines(studentsReproved)