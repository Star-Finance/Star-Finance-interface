import React from 'react'
import Project, { IprojectInfo } from './Project'

export default function Projects(props: {projects: IprojectInfo[]}) {

  const projects = props.projects.map((it) => <Project {...it} />)

  return (
    <div className='projectList'>
      { projects }
    </div>
  )
}
