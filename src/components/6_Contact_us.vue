<template>
  <section id="contact" class="contact_us">
    <div class="contact_img_wrapper">
      <img src="/img/lines_contact.svg"  class="lines img1" alt="">
      <img src="/img/lines_contact.svg"  class="lines img2" alt="">
      <img src="/img/contact.svg" v-lazy-animate="{delay: 100}" class="contact_img" alt="">

    </div>
    <div class="contact_wrapper">
      <div v-if="!formSubmitted">
        <h2>GET IN TOUCH AND RECEIVE QUOTA FOR YOUR BUSINESS</h2>
        
        <div class="form_grid">
          <div class="form_field">
            <label for="name">Your name</label>
            <input type="text" id="name" v-model="formData.name" placeholder="John Smith">
            <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
          </div>
          
          <div class="form_field">
            <label for="email">Your mail</label>
            <input type="email" id="email" v-model="formData.email" placeholder="johnsmith@company.com">
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
          </div>
          
          <div class="form_field">
            <label for="phone">Phone number</label>
            <div class="phone_input">
              <input type="tel" id="phone" v-model="formData.phone" placeholder="+353873473686">
            </div>
            <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
          </div>
          
          <div class="form_field">
            <label for="website">Company website</label>
            <input type="url" id="website" v-model="formData.website" placeholder="https://sitedomain.com">
          </div>
          
          <div class="form_field full_width">
            <label>Monthly volume</label>
            <div class="volume_options">
              <div class="volume_option">
                <input type="radio" id="volume1" name="volume" value="Less than $100K" v-model="formData.volume">
                <label for="volume1">Less than $100K</label>
              </div>
              <div class="volume_option">
                <input type="radio" id="volume2" name="volume" value="$100K - $1M" v-model="formData.volume">
                <label for="volume2">$100K - $1M</label>
              </div>
              <div class="volume_option">
                <input type="radio" id="volume3" name="volume" value="$1M - $10M" v-model="formData.volume">
                <label for="volume3">$1M - $10M</label>
              </div>
              <div class="volume_option">
                <input type="radio" id="volume4" name="volume" value="More than $10M" v-model="formData.volume">
                <label for="volume4">More than $10M</label>
              </div>
            </div>
          </div>
          
          <div class="form_field full_width">
            <label for="message">Tell us more about your needs (optional)</label>
            <textarea id="message" v-model="formData.message" placeholder="Your message"></textarea>
          </div>
          
          <div class="form_field full_width">
            <div class="agreement">
              <input type="checkbox" id="agreement" v-model="formData.agreement">
              <label for="agreement">I agree to receive messages from Fincord</label>
            </div>
          </div>
        </div>
        
        <div class="submit_wrapper">
          <button @click="submitForm" class="submit_button" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Get in touch' }}
          </button>
        </div>
      </div>
      
      <div v-else class="thank_you">
        <h2>Thank You for Your Message!</h2>
        <p>We have received your inquiry and will get back to you shortly.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  volume: string;
  message: string;
  agreement: boolean;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  website: '',
  volume: '',
  message: '',
  agreement: false
});

const errors = reactive<Errors>({});
const formSubmitted = ref(false);
const isSubmitting = ref(false);

const validateForm = (): boolean => {
  let isValid = true;
  
  // Очищаем предыдущие ошибки
  errors.name = undefined;
  errors.email = undefined;
  errors.phone = undefined;
  
  // Проверяем имя
  if (!formData.name) {
    errors.name = 'Please enter your name';
    isValid = false;
  }
  
  // Проверяем email
  if (!formData.email) {
    errors.email = 'Please enter your email';
    isValid = false;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }
  }
  
  // Проверяем телефон
  if (!formData.phone) {
    errors.phone = 'Please enter your phone number';
    isValid = false;
  }
  
  return isValid;
};

const submitForm = () => {
  // Валидация формы
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  // Создаем скрытый iframe для отправки
  const iframe = document.createElement('iframe');
  iframe.name = 'hidden_iframe';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  
  // Создаем форму и отправляем данные
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://script.google.com/macros/s/AKfycbxQD15Ox03QUcnG9Kyr38_QAjfmSnxaeXBc2Pi6hegn1E8E5nRTYszG8ytQTLSuEb79/exec';
  form.target = 'hidden_iframe';
  
  // Добавляем поля формы
  const addField = (name: string, value: string | number | boolean) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value.toString();
    form.appendChild(input);
  };
  
  addField('name', formData.name);
  addField('email', formData.email);
  addField('phone', formData.phone);
  addField('website', formData.website || '');
  addField('volume', formData.volume || '');
  addField('message', formData.message || '');
  addField('agreement', formData.agreement ? 'Yes' : 'No');
  
  // Добавляем форму на страницу и отправляем
  document.body.appendChild(form);
  form.submit();
  
  // После небольшой задержки показываем благодарность
  setTimeout(() => {
    formSubmitted.value = true;
    isSubmitting.value = false;
    
    // Удаляем форму и iframe
    document.body.removeChild(form);
    document.body.removeChild(iframe);
  }, 1000);
};
</script>

<style lang="scss" scoped>
.contact_us {
  position: relative;
  width: 100%;
  padding: 4rem 0;
  color: #fff;
  min-height: 40rem;
}

.contact_wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 34rem;
  width: 100%;
  padding: 0 1rem;
  
  @media screen and (max-width: 1150px) {
    max-width: 90%;
  }
}

h2 {
  font-size: 1.17rem;
  margin-top: 3.5rem;
  text-align: center;
  color: #C9B36E;
  font-weight: 700;
  white-space: nowrap;
}

.form_grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
}

.error-message {
  color: #ff4747;
  font-size: 0.75rem;
  margin-top: 0.3rem;
  margin-bottom: 0;
}

.form_field {
  display: flex;
  flex-direction: column;
  
  &.full_width {
    grid-column: 1 / -1;
  }
  
  label {
    margin-bottom: 0.5rem;
    color: #C9B36E;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="url"],
  textarea {
    background: rgba(201, 179, 110, 0.40);
    border: none;
    padding: 0.8rem 1rem;
    color: #fff;
    border-radius: 0;
    font-size: 1rem;
    
    &::placeholder {
      color: rgba(0, 0, 0, 0.60);
    }
    
    &:focus {
      outline: 1px solid #C9B36E;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
}

.volume_options .volume_option label {
  color: rgba(0, 0, 0, 0.60);
}

.phone_input {
  display: flex;
  align-items: center;
  
  .country_flag {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.8rem;
    
    img {
      width: 1.5rem;
      height: auto;
    }
  }
  
  input {
    flex: 1;
    background: none;
  }
}

.volume_options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  
  .volume_option {
    position: relative;
    
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
      
      &:checked + label {
        background-color: rgba(201, 179, 110, 0.40);
      }
    }
    
    label {
      display: flex;
      align-items: center;
      background-color: rgba(201, 179, 110, 0.40);
      padding: 0.5rem;
      cursor: pointer;
      font-size: 0.625rem;
      color: #000;
      transition: background-color 0.3s;
      margin: 0;
      height: 2rem;
      white-space: nowrap;
      
      &:before {
        content: '';
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.60);;
        margin-right: 0.4rem;
        background-color: transparent;
        position: relative;
        aspect-ratio: 1/1;
      }
    }
    
    input[type="radio"]:checked + label:before {
      background-color: #C9B36E;
    }
  }
}

.agreement {
  display: flex;
  align-items: center;
  
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid #C9B36E;
    background-color: transparent;
    display: inline-block;
    position: relative;
    margin-right: 0.75rem;
    cursor: pointer;
    
    &:checked:after {
      content: '';
      position: absolute;
      left: 0.3rem;
      top: 0.1rem;
      width: 0.4rem;
      height: 0.5rem;
      border: solid #C9B36E;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
  
  label {
    margin: 0;
    cursor: pointer;
  }
}

.submit_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.submit_button {
  margin-top: 1rem;
  font-weight: 700;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.8rem 3rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: #ffffff;
    color: #000;
    border-color: #C9B36E;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

.thank_you {
  text-align: center;
  padding: 3rem 1rem;
  
  h2 {
    margin-bottom: 1rem;
    margin-top: 10rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #fff;
  }
}

.contact_img_wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: scale(var(--scale-value)) translateX(-50%);
  width: auto;
  height: 500px;
  z-index: 0;
}

.contact_img {
  position: absolute;
  top: 240px;
  left: -604px;
  width: 1210px;
  height: 168px;
}

.lines {
  position: absolute;
  height: 400px;
  width: auto;
  z-index: 0;
  top: 150px;
}

.lines.img1 {
  left: -780px;
  transform: perspective(500px) rotateY(55deg);
}

.lines.img2 {
  left: 150px;
  transform: perspective(500px) rotateY(-55deg) rotateZ(180deg);
}
</style>
