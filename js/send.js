const sendRequest = async (body) => {
  const url = "https://vitalbarbatelegserver.onrender.com"

  const jsonData = JSON.stringify(body)

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonData,
  };

  try {
    const response = await fetch(`${url}/send-message`, requestOptions)

    if (!response.ok) {
      throw new Error('Помилка мережі: ' + response.status);
    }
  } catch (error) {
    console.error('Помилка:', error);
  }
};

const form = document.getElementById("order_form_main")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const comment = form.querySelector('select[name="comment"]').value;
  const name = form.querySelector('input[name="name"]').value;
  const phone = form.querySelector('input[name="phone"]').value;
  const post = form.querySelector('input[name="post"]').value;
  const city = form.querySelector('input[name="city"]').value;


  const formData = {
    tovar: "Електричний ланч",
    comment,
    name,
    phone,
    post,
    city
  };

  await sendRequest(formData)

  window.location.href = '../spasibo/index.html';
})

