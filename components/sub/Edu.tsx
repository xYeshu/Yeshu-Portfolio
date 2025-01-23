import React from "react";
const people = [
  {
    name: 'Amity University',
    degree: 'Mtech - Cyber Security (8.7 CGPA)',
    location: 'Noida, UP, India',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/C560BAQHC_Tto39UPmg/company-logo_200_200/company-logo_200_200/0/1631438766862?e=1745452800&v=beta&t=I9OJ3XmTxFcvk-ywuT-s6ot8tWeUMjkNRwVKkOzN6TY',

    duration: '2024-2026',

  },
  {
    name: 'Symbiosis Skills and Professional Universisty',
    degree: 'Btech - Computer Science and Information Technology  (8.8 CGPA)',
    location: 'Pune, MH, India',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D4D0BAQFsRhWOud-KIA/company-logo_200_200/company-logo_200_200/0/1690456704424/symbiosis_skills_and_professional_university_logo?e=1745452800&v=beta&t=UPk4Ssp02LPTHSMczNO7xNTGlJGJUbBfVve__A2MKu8',

    duration: '2020-2024',
  },

]

export default function Example() {
  return (
    <div
      className="flex flex-col items-center justify-center py-10" id="Edu">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Education
      </h1>
      <ul className="divide-y divide-blue-500 ">

        {people.map((person) => (
          <li key={person.degree} className="flex justify-between items-center gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img alt="" src={person.imageUrl} className="object-contain h-120 w-20 flex-none rounded bg-gray-50" />
              <div className="min-w-0 flex-auto">
                <p className="text-[35px] font-medium text-gray-200">{person.name}</p>
                <p className="text-[20px] mt-2 text-gray-200">{person.degree}</p>

              </div>
            </div>

            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-[20px] mt-2 text-gray-200">{person.location}</p>

              <p className="text-[20px] mt-4 text-gray-200">
                <time >{person.duration}</time>
              </p>

            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}