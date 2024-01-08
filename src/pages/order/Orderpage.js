import React from 'react'
import images from "../../Assets/logo.svg";
import "./order.css"
function Order() {
  return (
  <>
   <header class="header"><br></br>
    <img src={images}></img>
  <br></br><br></br>
  <br></br>
  <div class="bar">
    <a href="/HomePage">Anasayfa - </a>
    <a href="/Order">Sipariş Oluştur - </a>
    <a href="/SiparisinizAlindi">Onaylandı</a>
    </div><br></br>
   </header>
   <div class="top">
   <div CLASS="başlık-1">
  <p>Position Absolute Acı Pizza</p>
  </div>


<div>
  <div class="fiyat">
    <p>85.50₺</p>     <div class="seksenbeş-bölümü"><p>4.9</p><p>(200)</p></div>

    </div>



    <p id="info">Frontent Dev olarak hala positio:absolute kullanıyorsan bu çok acı bir pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak  odun ateşinde  bir fırında yüksek sıcaklıkta pişirilen,genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı  hamurdan oluşan İtalyan kçkenli lezzetli bir yemektir. Küçük bir pizza bazen pizzetta denir.</p>
  </div>

<form>
  <div class="radyo-select">
<div class = "radyo">
  <h3>Boyut Seç*</h3>
<input type="radio" id="Küçük" name="group"/>
  <label for="html">Küçük</label><br></br><br></br>
  <input type="radio" id="Orta" name="group"/>
  <label for="html">Orta</label><br></br><br></br>
  <input type="radio" id="Büyük" name="group"/>
  <label for="html">Büyük</label><br></br><br></br>
</div>

<div class="select-materyal">
<h3>Hamur Seç*</h3>
<label for="cars">Hamur Seç:  </label>
<select name="cars" id="cars">
<option   disabled="Hamur Seç" value="Hamur Seç" selected>Hamur Seç</option>
  <option value="Extra İnce">Extra İnce</option>
  <option value="İnce">İnce</option>
  <option value="Normal">Normal</option>
  <option value="Kalın">Kalın</option>
  <option value="Ekstra Kalın">Ekstra Kalın</option>
</select>
</div>
</div>
<div>

<h3>Ek Malzemeler</h3>
<p>En Fazla 10 Malzeme Seçebilirsiniz.5₺</p>
<div class="check-box">

<div class="box-1">
<input type="checkbox" id="Pepperoni" name="Pepperoni" />
<label for="Pepperoni">Pepperoni</label><br></br><br></br>
<input type="checkbox" id="Tavuk Izgara" name="Tavuk Izgara" />
<label for="Tavuk Izgara">Tavuk Izgara</label><br></br><br></br>
<input type="checkbox" id="Mısır" name="Mısır" />
<label for="Mısır">Mısır</label><br></br><br></br>
<input type="checkbox" id="Sarımsak" name="Sarımsak" />
<label for="Sarımsak">Sarımsak</label><br></br><br></br>
<input type="checkbox" id="Ananas" name="Ananas" />
<label for="Ananas">Ananas</label><br></br><br></br>
</div>

<div class ="box-2">
<input type="checkbox" id="Sosis" name="Sosis" />
<label for="Sosis">Sosis</label><br></br><br></br>
<input type="checkbox" id="Soğan" name="Soğan" />
<label for="Soğan">Soğan</label><br></br><br></br>
<input type="checkbox" id="Sucuk" name="Sucuk" />
<label for="Sucuk">Sucuk</label><br></br><br></br>
<input type="checkbox" id="Biber" name="Biber" />
<label for="Biber">Biber</label><br></br><br></br>
<input type="checkbox" id="Kabak" name="Kabak" />
<label for="Kabak">Kabak</label><br></br><br></br>
</div>

<div class ="box-3">
<input type="checkbox" id="Sosis" name="Sosis" />
<label for="Sosis">Kavada Jambonu</label><br></br><br></br>
<input type="checkbox" id="Domates" name="Domates" />
<label for="Domates">Domates</label><br></br><br></br>
<input type="checkbox" id="Jalepeno" name="Jalepeno" />
<label for="Jalepeno">Jalepeno</label><br></br><br></br>
<input type="checkbox" id="Sucuk" name="Sucuk" />
<label for="Sucuk">Sucuk</label><br></br><br></br>
</div>
</div>


</div>
<div class="footer">
  <p class="siparis-notu">Sipariş Notu</p>
    <div>
      <textarea name="not" id="not" cols="70" rows="3" 
        placeholder = "Siparişine eklemek istediğiniz bir not var mı?"></textarea>
      <hr />
    </div>
      <div class="siparis-ver">
      <div class="butonlar">
        <button class="buton">-</button><div class="buton-div">0</div><button class="buton">+</button></div>
          <div className='order-card'>
            <div className='siparis-toplam'> <h3>Sipariş Toplamı</h3>
              <div className='siparis-ust'>
                <p>Seçimler</p>
                <p>25TL</p>
                </div>
                <div className='siparis-alt'>
                <p>Toplam</p>
                <p>110TL</p>
                </div>
            </div>
                <div>
                    <button class="siparis-button">SİPARİŞ VER</button>
                </div>
          </div>
      </div>
</div>
</form>
 
</div>
 
   
   </>
  )
}

export default Order ;