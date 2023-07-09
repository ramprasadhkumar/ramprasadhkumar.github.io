import React from "react"
import Image from "next/image"

const fullstack_skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "PL/SQL" },
  { skill: "C++" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Bash" },
]
const db_pubsub = [
  { skill: "Oracle SQL" },
  { skill: "MongoDB" },
  { skill: "Snowflake" },
  { skill: "Elasticsearch" },
  { skill: "Redis" },
  { skill: "DynamoDB" },
  { skill: "Kafka" },
  { skill: "RabbitMQ" },
]
const tools_framworks = [
  { skill: "Angular" },
  { skill: "Spring Boot" },
  { skill: "React" },
  { skill: "Flask" },
  { skill: "Django" },
  { skill: "Hadoop" },
  { skill: "Spark" },
  { skill: "ELK" },
]
const devops_tools = [
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Jenkins" },
  { skill: "TeamCity" },
  { skill: "Rancher" },
  { skill: "Spinnaker" },
  { skill: "AWS" },
  { skill: "UDeploy" },
  { skill: "URelease" },
]
const AboutSection = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
           <div className="grid grid-cols-2 gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-6">FullStack</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {fullstack_skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                  
                )
              })}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-6">Databases</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {db_pubsub.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-6">Frameworks</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {tools_framworks.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-6">DevOps</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {devops_tools.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
