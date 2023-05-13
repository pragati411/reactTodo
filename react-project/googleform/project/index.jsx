import React from "react";

const DataRepo = ({ data, repositories }) => {
  return (
    <table>
      <thead>
        <tr style={{}}>
          <th>Name</th>
          <th>Profile</th>

          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{<img src={data.avatar_url} alt={data.avatar_url} />}</td>

          <td>
            {repositories.map((repo) => (
              <div key={repo.name}>
                <div>
                  <div>
                    <a href={repo.html_url}>{repo.name}</a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataRepo;
