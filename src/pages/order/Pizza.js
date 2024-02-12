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
const malzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Sucuk",
  "Ananas",
  "Kabak",
];
const pizzaSizes = ["Küçük", "Orta", "Büyük"];
const hamurSecenekleri = [
  { value: "", label: "Hamur Kalınlığı" },
  { value: "Extra İnce", label: "Extra İnce" },
  { value: "İnce", label: "İnce" },
  { value: "Normal", label: "Normal" },
  { value: "Kalin", label: "Kalın" },
  { value: "Extra Kalin", label: "Extra Kalın" },
];

export default function Order({ orderHandler }) {
  const [form, setForm] = useState(initialForm);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      ...form,
      adet: count,
      toplamTutar: (selectedMalzemeCount * 5 + 85.5) * count,
    };
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        console.log(res.data);
        setForm(initialForm);
        history.push("/success");
        orderHandler(res.data);
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
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
              {pizzaSizes.map((size, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={size}
                    name="size"
                    value={size}
                    onChange={handleChange}
                    checked={form.size === size}
                  />
                  <label htmlFor={size}>{size}</label>
                  <br />
                  <br />
                </div>
              ))}
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
                {hamurSecenekleri.map((secenek, index) => (
                  <option key={index} value={secenek.value}>
                    {secenek.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h3 class="barlow">Ek Malzemeler</h3>
            <p class="barlow">En Fazla 10 Malzeme Seçebilirsiniz.5₺</p>
            <div class="check-box barlow">
              {malzemeler.map((malzeme, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="malzeme"
                    id={malzeme}
                    value={malzeme}
                    onChange={handleChange}
                  />
                  <label htmlFor={malzeme}>{malzeme}</label>
                  <br />
                  <br />
                </div>
              ))}
              {form.malzeme.length > 0 &&
                (form.malzeme.length < 4 || form.malzeme.length > 10) && (
                  <p className="error-message">
                    Lütfen en az 4 veya en fazla 10 malzeme seçiniz.*
                  </p>
                )}
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
            {form.isim.length > 0 && form.isim.length <= 2 && (
              <p className="error-message">Lütfen 2'den fazla harf seçiniz.*</p>
            )}
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
