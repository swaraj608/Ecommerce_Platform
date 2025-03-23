import React from 'react';

const UserProfile = ({ dashboardView }) => {
  
  const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: "https://source.unsplash.com/400x400/?face",
    bio: "I love shopping and exploring unique products!"
  };

  return (
    <div className={dashboardView ? "card mb-4" : "card"}>
      <img 
        src={user.profilePic} 
        alt={user.name} 
        className="card-img-top" 
        style={{ borderRadius: dashboardView ? '0 0 50% 50%' : '0' }}
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text"><strong>Email:</strong> {user.email}</p>
        { !dashboardView && (
          <>
            <p className="card-text"><strong>Bio:</strong> {user.bio}</p>
            <button className="btn btn-primary">Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
