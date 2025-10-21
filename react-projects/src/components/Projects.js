import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import HardwareSet from './HardwareSet';

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 'proj-001',
      name: 'EE461L-DEMO',
      description: 'Demo project for EE461L',
      isMember: false,
      hardwareSets: [
        { name: 'HWSet1', available: 100, capacity: 100 },
        { name: 'HWSet2', available: 100, capacity: 100 },
      ],
    },
    {
      id: 'proj-002',
      name: 'Smart Home Project',
      description: 'IoT project with sensors',
      isMember: true,
      hardwareSets: [
        { name: 'HWSet1', available: 50, capacity: 100 },
        { name: 'HWSet2', available: 75, capacity: 100 },
      ],
    },
  ]);

  const handleJoin = (projectId) => {
    setProjects(projects.map((proj) =>
      proj.id === projectId ? { ...proj, isMember: true } : proj
    ));
  };

  const handleLeave = (projectId) => {
    setProjects(projects.map((proj) =>
      proj.id === projectId ? { ...proj, isMember: false } : proj
    ));
  };

  const handleCheckIn = (projectId, setName, qty) => {
    setProjects(projects.map((proj) => {
      if (proj.id === projectId) {
        const updatedSets = proj.hardwareSets.map((hwSet) =>
          hwSet.name === setName
            ? { ...hwSet, available: Math.min(hwSet.available + qty, hwSet.capacity) }
            : hwSet
        );
        return { ...proj, hardwareSets: updatedSets };
      }
      return proj;
    }));
  };

  const handleCheckOut = (projectId, setName, qty) => {
    setProjects(projects.map((proj) => {
      if (proj.id === projectId) {
        const updatedSets = proj.hardwareSets.map((hwSet) =>
          hwSet.name === setName && hwSet.available >= qty
            ? { ...hwSet, available: hwSet.available - qty }
            : hwSet
        );
        return { ...proj, hardwareSets: updatedSets };
      }
      return proj;
    }));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Projects</h1>
      <p>Manage your projects and hardware</p>
      
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          projectId={project.id}
          projectName={project.name}
          description={project.description}
          isMember={project.isMember}
          onJoin={handleJoin}
          onLeave={handleLeave}
        >
          {project.isMember &&
            project.hardwareSets.map((hwSet) => (
              <HardwareSet
                key={hwSet.name}
                setName={hwSet.name}
                available={hwSet.available}
                capacity={hwSet.capacity}
                onCheckIn={(setName, qty) => handleCheckIn(project.id, setName, qty)}
                onCheckOut={(setName, qty) => handleCheckOut(project.id, setName, qty)}
              />
            ))}
        </ProjectCard>
      ))}
    </div>
  );
}

export default Projects;
