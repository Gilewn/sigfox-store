const solutionUpdate = (solutionId, solutionTitle, solutionImage) => {
  const request = new Request(
    `http://localhost:5000/admins/UpdateSolution/${solutionId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        new_title: solutionTitle,
        new_image: solutionImage,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  );
  return fetch(request)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export default solutionUpdate;
