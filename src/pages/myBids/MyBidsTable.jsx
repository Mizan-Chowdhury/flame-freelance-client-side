const MyBidsTable = ({ bidJobs }) => {
  const { userEmail, title, deadline, status } = bidJobs;
  return (
    <div>
      <div className="card bg-[#0b1126] shadow-xl md:h-60">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="">
            <p>Your Email: {userEmail}</p>
            <p>Deadline: {deadline}</p>
          </div>
          <div className="card-actions items-center">
            <p>Status: {status}</p>
            <button className="btn btn-sm">Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBidsTable;
