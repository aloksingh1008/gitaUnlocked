<template>
  <div class="min-h-screen bg-gray-50 pt-20 flex flex-col">
    <!-- Top Banner -->
    <div
      class="flex flex-col md:flex-row items-stretch items-center justify-center bg-white px-0 overflow-hidden relative"
    >
      <!-- Left Image -->
      <div class="relative w-full md:w-1/3 h-[250px] md:h-[400px]">
        <img
          src="/KrsnaArjun.jpg"
          alt="Left Image"
          class="w-full h-full object-cover [clip-path:polygon(0_0,100%_0,70%_100%,0_100%)]"
        />
      </div>

      <!-- Center Text -->
      <div
        class="absolute top-[-40px] md:top-[-80px] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-center bg-no-repeat bg-contain rotate-90"
        style="background-image: url('/background_left.png');"
      ></div>
      <div class="relative mx-4 md:mx-8">
        <div class="text-center py-10 md:py-20 relative">
          <h1
            class="text-3xl md:text-5xl font-bold uppercase text-[#D61C75] [font-family:'Kaushan_Script',cursive]"
          >
            REGISTRATION
          </h1>
          <h2
            class="text-2xl md:text-4xl font-bold uppercase mt-2 underline decoration-[#D61C75] text-[#D61C75] [font-family:'Kaushan_Script',cursive]"
          >
            FORM
          </h2>
        </div>
      </div>

      <!-- Right Image -->
      <div class="relative w-full md:w-1/3 h-[250px] md:h-[400px]">
        <img
          src="/Dhrtarastra&Sanjay.jpg"
          alt="Right Image"
          class="w-full h-full object-cover [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col md:flex-row flex-1 items-center justify-center p-4 md:p-10 gap-8">
      <!-- Left Half -->
      <div
        class="w-full md:w-1/2 flex flex-col items-center text-center justify-center px-2 md:px-10 py-6 md:py-10"
      >
        <h2 class="text-2xl md:text-3xl font-bold mb-4 text-[#D61C75]">
          START YOUR GITA JOURNEY NOW!
        </h2>
        <p class="text-gray-600 mb-6 text-sm md:text-base">
          Check below a small glimpse of your exciting journey with Gita Unlocked
        </p>
        <div>
          <img
            src="/KrsnaArjun.jpg"
            alt="promo"
            class="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-xl shadow-md"
          />
        </div>
      </div>

      <!-- Right Half (Form) -->
      <div class="w-full md:w-1/2 bg-white p-4 md:p-8 rounded-xl shadow-md">
        <h3 class="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">
          Registration Form
        </h3>
        <form class="space-y-6" @submit.prevent="submitForm">
          <!-- Full Name -->
          <div class="flex flex-col text-left">
            <label class="mb-1 font-medium text-[#D61C75]">
              Full Name <span class="text-red-500">(required)</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <!-- Phone Number -->
          <div class="flex flex-col text-left">
            <label class="mb-1 font-medium text-[#D61C75]">
              Phone Number <span class="text-red-500">(required)</span>
            </label>
            <input
              v-model="form.phone"
              type="tel"
              required
              class="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <!-- Email -->
          <div class="flex flex-col text-left">
            <label class="mb-1 font-medium text-[#D61C75]">
              Email ID <span class="text-red-500">(required)</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <!-- Referral Code -->
          <div class="flex flex-col text-left">
            <label class="mb-1 font-medium text-[#D61C75]">
              Referral Code <span class="text-red-500">(if any)</span>
            </label>
            <input
              v-model="form.referral"
              type="text"
              class="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <!-- Fees Section -->
          <div class="flex flex-col text-left text-base md:text-lg font-semibold space-y-2">
            <div class="flex justify-between">
              <span>Registration Fee:</span>
              <span>₹500</span>
            </div>
            <div v-if="discount > 0" class="flex justify-between text-green-600">
              <span>Discount Applied:</span>
              <span>-₹{{ discount }}</span>
            </div>
            <hr class="my-2 border-gray-300" />
            <div class="flex justify-between">
              <span>Total:</span>
              <span>₹{{ total }}</span>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-orange-600 text-white font-bold p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enroll Now !!
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import db from "../src/firebase/init";
import { collection, addDoc } from "firebase/firestore";
import { reactive, computed } from "vue";

const form = reactive({
  name: "",
  phone: "",
  email: "",
  referral: "",
});

const referralDiscounts = {
  GITA100: 100,
  GITA200: 200,
};

const discount = computed(() => {
  return referralDiscounts[form.referral.toUpperCase()] || 0;
});

const total = computed(() => {
  return 500 - discount.value;
});

async function submitForm() {
  try {
    await addDoc(collection(db, "enrollments"), form);
    alert("✅ Enrollment submitted!");
    form.name = "";
    form.phone = "";
    form.email = "";
    form.referral = "";
  } catch (err) {
    console.error("Firestore error:", err);
    alert("❌ Failed to submit");
  }
}
</script>