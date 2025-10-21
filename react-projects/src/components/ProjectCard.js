import React from 'react';
import { Button } from '@mui/material';

function ProjectCard({ projectId, projectName, description, isMember, onJoin, onLeave, children }) {
  return (
    <div style={{
      border: '2px solid #333',
      padding: '15px',
      marginBottom: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      <h2>{projectName}</h2>
      <p>{description}</p>
      
      {!isMember ? (
        <Button 
          variant="contained" 
          onClick={() => onJoin(projectId)}
        >
          Join
        </Button>
      ) : (
        <Button 
          variant="outlined" 
          color="error"
          onClick={() => onLeave(projectId)}
        >
          Leave
        </Button>
      )}
      
      {isMember && children && (
        <div style={{ marginTop: '20px' }}>
          <h3>Hardware:</h3>
          {children}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
