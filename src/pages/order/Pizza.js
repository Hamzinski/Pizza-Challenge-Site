import React from "react";
import images from "../../Assets/logo.svg";
import "./pizza.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const initialForm = {
  isim: "",
  size: "",
  hamur: "",
  malzeme: [],
  not: "",
};

export default function Order() {
  const [form, setForm] = useState(initialForm);
  const [disableButton, setDisableButton] = useState(true);
  const [selectedMalzemeCount, setSelectedMalzemeCount] = useState(0);
  const [count, setCount] = useState(1);

  const history = useHistory();

  const isOrderValid = () => {
    return (
      form.isim.length > 2 &&
      form.size !== "" &&
      form.hamur !== "" &&
      form.malzeme.length >= 4 &&
      form.malzeme.length <= 10 &&
      count !== 0
    );
  };

  useEffect(() => {
    const selectedMalzemeCount = form.malzeme.length;
    setSelectedMalzemeCount(form.malzeme.length);
  }, [form.malzeme]);

  const handleChange = (event) => {
    const { type, name, checked, value } = event.target;

    if (type === "radio" || name === "isim") {
      setForm({ ...form, [name]: value });
    } else if (type === "select-one") {
      setForm({ ...form, [name]: value });
    } else if (type === "checkbox") {
      if (checked) {
        setForm({ ...form, malzeme: [...form.malzeme, value] });
      } else {
        setForm({
          ...form,
          malzeme: form.malzeme.filter((topping) => topping !== value),
        });
      }
    } else if (name === "not") {
      setForm({ ...form, not: value });
    }
  };
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log(
    "Boyut:",
    form.size + " " + "Hamur:",
    form.hamur + " " + "Malzemeler:",
    form.malzeme + " " + "Sipariş notu:",
    form.not
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("https://reqres.in/api/users", form).then((res) => {
      console.log(res.data);
      setForm(initialForm);
    });
    history.push("/success");
    //formu submit
  };

  return (
    <>
      <header class="header">
        <img src={images}></img>
        <div class="bar">
          <p>
            Anasayfa <span>- Sipariş Oluştur</span>
          </p>
        </div>
      </header>
      <div class="top">
        <div class="head">
          <p id="headone" class="barlow">
            Position Absolute Acı Pizza
          </p>
        </div>

        <div>
          <div class="fiyat">
            <p id="tam-fiyat" class="barlow">
              85.50₺
            </p>{" "}
            <div class="rate-part">
              <p class="barlow">4.9</p>
              <p class="barlow">(200)</p>
            </div>
          </div>
          <p class="barlow" id="info">
            Frontent Dev olarak hala positio:absolute kullanıyorsan bu çok acı
            bir pizza tam sana göre. Pizza, domates, peynir ve genellikle
            çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
            odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizza bazen pizzetta denir.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div class="radyo-select">
            <div class="radyo barlow">
              <h3 class="barlow">
                Boyut Seç<span>*</span>
              </h3>
              <input
                type="radio"
                id="Küçük"
                name="size"
                value="Küçük"
                onChange={handleChange}
              />
              <label for="html">Küçük</label>
              <br></br>
              <br></br>
              <input
                type="radio"
                id="Orta"
                name="size"
                value="Orta"
                onChange={handleChange}
              />
              <label for="html">Orta</label>
              <br></br>
              <br></br>
              <input
                type="radio"
                id="Büyük"
                name="size"
                value="Büyük"
                onChange={handleChange}
              />
              <label for="html">Büyük</label>
              <br></br>
              <br></br>
            </div>

            <div class="select-materyal">
              <h3 class="barlow">
                Hamur Seç<span>*</span>
              </h3>
              <label for="hamur">Hamur Seç: </label>
              <select
                name="hamur"
                id="hamur"
                value={form.hamur}
                selected
                onChange={handleChange}
              >
                <option value="" disabled selected hidden>
                  Hamur Kalınlığı
                </option>
                <option value="Extra İnce">Extra İnce</option>
                <option value="İnce">İnce</option>
                <option value="Normal">Normal</option>
                <option value="Kalin">Kalın</option>
                <option value="Extra Kalin">Extra Kalın</option>
              </select>
            </div>
          </div>
          <div>
            <h3 class="barlow">Ek Malzemeler</h3>
            <p class="barlow">En Fazla 10 Malzeme Seçebilirsiniz.5₺</p>
            <div class="check-box barlow">
              <div class="box-1">
                <input
                  type="checkbox"
                  id="Pepperoni"
                  name="malzeme"
                  value="Pepperoni"
                  onChange={handleChange}
                />
                <label for="Pepperoni">Pepperoni</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Tavuk Izgara"
                  name="malzeme"
                  value="Tavuk Izgara"
                  onChange={handleChange}
                />
                <label for="Tavuk Izgara">Tavuk Izgara</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Mısır"
                  name="malzeme"
                  value="Mısır"
                  onChange={handleChange}
                />
                <label for="Mısır">Mısır</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Sarımsak"
                  name="malzeme"
                  value="Sarımsak"
                  onChange={handleChange}
                />
                <label for="Sarımsak">Sarımsak</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Ananas"
                  name="malzeme"
                  value="Ananas"
                  onChange={handleChange}
                />
                <label for="Ananas">Ananas</label>
                <br></br>
                <br></br>
              </div>

              <div class="box-2">
                <input
                  type="checkbox"
                  id="Sosis"
                  name="malzeme"
                  value="Sosis"
                  onChange={handleChange}
                />
                <label for="Sosis">Sosis</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Soğan"
                  name="malzeme"
                  value="Soğan"
                  onChange={handleChange}
                />
                <label for="Soğan">Soğan</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Sucuk"
                  name="malzeme"
                  value="Sucuk"
                  onChange={handleChange}
                />
                <label for="Sucuk">Sucuk</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Biber"
                  name="malzeme"
                  value="Biber"
                  onChange={handleChange}
                />
                <label for="Biber">Biber</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Kabak"
                  name="malzeme"
                  value="Kabak"
                  onChange={handleChange}
                />
                <label for="Kabak">Kabak</label>
                <br></br>
                <br></br>
              </div>

              <div class="box-3">
                <input
                  type="checkbox"
                  id="Kanada Jambonu"
                  name="malzeme"
                  value="Kanada Jambonu"
                  onChange={handleChange}
                />
                <label for="Sosis">Kanada Jambonu</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Domates"
                  name="malzeme"
                  value="Domates"
                  onChange={handleChange}
                />
                <label for="Domates">Domates</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Jalepeno"
                  name="malzeme"
                  value="Jalepeno"
                  onChange={handleChange}
                />
                <label for="Jalepeno">Jalepeno</label>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  id="Sucuk"
                  name="malzeme"
                  value="Sucuk"
                  onChange={handleChange}
                />
                <label for="Sucuk">Sucuk</label>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
          <div class="footer barlow">
            <label htmlFor="isim">Adınız:</label>
            <input
              id="isim"
              onChange={handleChange}
              value={form.isim}
              name="isim"
            />
            <p class="siparis-notu">Sipariş Notu</p>
            <div>
              <textarea
                name="not"
                id="not"
                cols="70"
                rows="3"
                value={form.not}
                onChange={handleChange}
                placeholder="Siparişine eklemek istediğiniz bir not var mı?"
              ></textarea>
              <hr />
            </div>
            <div class="siparis-ver">
              <div class="butonlar">
                <button type="button" class="buton" onClick={decrement}>
                  -
                </button>
                <div class="buton-div">{count}</div>
                <button type="button" class="buton" onClick={increment}>
                  +
                </button>
              </div>
              <div className="order-card">
                <div className="siparis-toplam">
                  {" "}
                  <h3>Sipariş Toplamı</h3>
                  <div className="siparis-ust">
                    <p>Seçimler</p>
                    <p>{count * (selectedMalzemeCount * 5)}TL</p>
                  </div>
                  <div className="siparis-alt">
                    <p>Toplam</p>
                    <p>{(selectedMalzemeCount * 5 + 85.5) * count}TL</p>
                  </div>
                </div>
                <div>
                  <button
                    id="order-button"
                    class="siparis-button"
                    disabled={!isOrderValid()}
                  >
                    SİPARİŞ VER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
