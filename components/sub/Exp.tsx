import React from "react";
const people = [
    {
      name: 'Cyber Forensics Analyst',
      degree: 'Cyber Security Corporation, Pune',
      work: 'Involved in solving real life Cyber Crime Cases with government and Private Sector.',
      work2: 'Discovered critical vulnerability in Microsoft BitLocker Encryption system. Major areas of',
      work3: 'work: Mobile Device Forensics, Data Security and Recovery, Cyber Crime Investigation, ',
      work4: 'Hard disk Imaging Forensics, Legal Drafting, Electronic Evidence ',
      location: 'Pune, MH, India',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/C560BAQHC_Tto39UPmg/company-logo_200_200/company-logo_200_200/0/1631438766862?e=1745452800&v=beta&t=I9OJ3XmTxFcvk-ywuT-s6ot8tWeUMjkNRwVKkOzN6TY',
     
      duration: '06/23 - 01/24',
      
    },
    {
      name: 'Web Development Intern',
      degree: 'Sciqus Infotech Pvt Ltd, Pune',
      work: 'Desgined and built Secure Web Apps using MERN Stack',
      work2: 'Worked on Web Technologies including HTML,CSS,Javascript, Node js, React js, Express ',
      work3: '  Mongo DB, Postman, Tailwind, Bootstrap ',
      work4: 'Also worked on UI UX Desgining with Adobe XD',
      location: 'Pune, MH, India',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/C560BAQHC_Tto39UPmg/company-logo_200_200/company-logo_200_200/0/1631438766862?e=1745452800&v=beta&t=I9OJ3XmTxFcvk-ywuT-s6ot8tWeUMjkNRwVKkOzN6TY',
     
      duration: '06/22 - 09/22',
      
    }
    
    
  ]
  export default function Example() {
    return (
      <div
        className="flex flex-col items-center justify-center py-5" id="Edu">

        <ul className="divide-y divide-blue-500 ">
  
          {people.map((person) => (
            <li key={person.degree} className="flex justify-center gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                
                <div className="min-w-0 flex-auto mx-3">
                  <p className="text-[35px] font-medium text-gray-200">{person.name}</p>
                  <p className="text-[20px] mt text-gray-200">{person.degree}</p>
                  <p className="text-[20px] mt text-gray-400">{person.work}</p>
                  <p className="text-[20px] mt text-gray-400">{person.work2}</p>
                  <p className="text-[20px] mt text-gray-400">{person.work3}</p>
                  <p className="text-[20px] mt text-gray-400">{person.work4}</p>
  
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