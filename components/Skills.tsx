import React from 'react'

const Skills = () => {
    const Skills = [
        {
            imgURL: "/nextmain.png",
            Name: "Next JS"
        },
        {
            imgURL: "/react.png",
            Name: "React"
        },
        {
            imgURL: "/js.png",
            Name: "JavaScript"
        },
        {
            imgURL: "/typescript.png",
            Name: "TypeScript"
        },
        {
            imgURL: "/aws.png",
            Name: "AWS"
        },
        {
            imgURL: "/docker.png",
            Name: "Docker"
        },
        {
            imgURL: "/tailwind.png",
            Name: "Tailwind "
        },

        {
            imgURL: "/express.png",
            Name: "Express"
        },
        {
            imgURL: "/node-js.png",
            Name: "Node JS"
        },
        {
            imgURL: "/mongodb.png",
            Name: "MongoDB"
        },
        {
            imgURL: "/postgres.png",
            Name: "Postgres"
        },
        {
            imgURL: "/prisma.png",
            Name: "Prisma"
        },
        {
            imgURL: "/cloudfare.png",
            Name: "Cloudfare"
        },
        {
            imgURL: "/vercel2.png",
            Name: "Vercel"
        },
        {
            imgURL: "/mui.png",
            Name: "Material UI"
        },
        {
            imgURL: "/shadcn.png",
            Name: "Shadcn"
        },
        {
            imgURL: "/git.png",
            Name: "Git"
        },
        {
            imgURL: "/githubicon.png",
            Name: "GitHub"
        },
        {
            imgURL: "/postman.png",
            Name: "Postman"
        },
        {
            imgURL: "/photoshop.png",
            Name: "Photoshop"
        },

    ]
    return (
        Skills.map((skills, index) => (
            <div key={index} className="text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40 border-gray-400 w-full max-w-[110px] sm:max-w-[130px] flex justify-center gap-2 items-center hover:bg-slate-800 py-2.5 px-1.5 transition-all duration-200 text-xs sm:text-sm font-semibold select-none" >
                <div className="rounded-md flex-shrink-0">
                    <img src={skills.imgURL} width={20} className="object-contain" alt="" />
                </div>
                <div className="truncate">{skills.Name}</div>
            </div>
        ))
    )
}

export default Skills