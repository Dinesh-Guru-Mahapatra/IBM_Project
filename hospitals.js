const hospitals = [
  // ---------------- Delhi ----------------
  { id: 1, name: "AIIMS Delhi", city: "New Delhi", address: "Ansari Nagar, New Delhi", slots: 20, rating: 4.9 },
  { id: 2, name: "Fortis Escorts Heart Institute", city: "New Delhi", address: "Okhla Road, New Delhi", slots: 14, rating: 4.7 },

  // ---------------- Mumbai ----------------
  { id: 3, name: "Lilavati Hospital", city: "Mumbai", address: "Bandra Reclamation, Mumbai", slots: 15, rating: 4.6 },
  { id: 4, name: "Tata Memorial Hospital", city: "Mumbai", address: "Parel, Mumbai", slots: 18, rating: 4.8 },

  // ---------------- Bangalore ----------------
  { id: 5, name: "Manipal Hospital", city: "Bengaluru", address: "HAL Old Airport Road, Bengaluru", slots: 12, rating: 4.6 },
  { id: 6, name: "Narayana Health", city: "Bengaluru", address: "Bommasandra, Bengaluru", slots: 16, rating: 4.7 },

  // ---------------- Hyderabad ----------------
  { id: 7, name: "Apollo Hospitals Hyderabad", city: "Hyderabad", address: "Jubilee Hills, Hyderabad", slots: 18, rating: 4.7 },
  { id: 8, name: "Continental Hospitals", city: "Hyderabad", address: "Gachibowli, Hyderabad", slots: 12, rating: 4.5 },

  // ---------------- Chennai ----------------
  { id: 9, name: "Apollo Hospitals Chennai", city: "Chennai", address: "Greams Road, Chennai", slots: 20, rating: 4.8 },
  { id: 10, name: "MIOT International", city: "Chennai", address: "Manapakkam, Chennai", slots: 14, rating: 4.6 },

  // ---------------- Kolkata ----------------
  { id: 11, name: "AMRI Hospitals", city: "Kolkata", address: "Salt Lake, Kolkata", slots: 12, rating: 4.5 },
  { id: 12, name: "Fortis Hospital Kolkata", city: "Kolkata", address: "Anandapur, Kolkata", slots: 15, rating: 4.6 },

  // ---------------- Pune ----------------
  { id: 13, name: "Jehangir Hospital", city: "Pune", address: "Bund Garden Road, Pune", slots: 10, rating: 4.3 },
  { id: 14, name: "Ruby Hall Clinic", city: "Pune", address: "Sassoon Road, Pune", slots: 14, rating: 4.4 },

  // ---------------- Ahmedabad ----------------
  { id: 15, name: "Apollo Hospitals Ahmedabad", city: "Ahmedabad", address: "Bhat, Gandhinagar Highway, Ahmedabad", slots: 16, rating: 4.6 },
  { id: 16, name: "Sterling Hospital", city: "Ahmedabad", address: "Memnagar, Ahmedabad", slots: 12, rating: 4.4 },

  // ---------------- Jaipur ----------------
  { id: 17, name: "Fortis Escorts Hospital", city: "Jaipur", address: "Malviya Nagar, Jaipur", slots: 13, rating: 4.5 },
  { id: 18, name: "CK Birla Hospitals", city: "Jaipur", address: "Raja Park, Jaipur", slots: 10, rating: 4.2 },

  // ---------------- Lucknow ----------------
  { id: 19, name: "Sanjay Gandhi PGI", city: "Lucknow", address: "Raebareli Road, Lucknow", slots: 20, rating: 4.8 },
  { id: 20, name: "Medanta Hospital Lucknow", city: "Lucknow", address: "Amar Shaheed Path, Lucknow", slots: 14, rating: 4.5 },

  // ---------------- Patna ----------------
  { id: 21, name: "Paras HMRI Hospital", city: "Patna", address: "Bailey Road, Patna", slots: 12, rating: 4.3 },
  { id: 22, name: "AIIMS Patna", city: "Patna", address: "Phulwari Sharif, Patna", slots: 16, rating: 4.6 },

  // ---------------- Bhopal ----------------
  { id: 23, name: "AIIMS Bhopal", city: "Bhopal", address: "Saket Nagar, Bhopal", slots: 15, rating: 4.5 },
  { id: 24, name: "Bansal Hospital", city: "Bhopal", address: "Shahpura, Bhopal", slots: 10, rating: 4.2 },

  // ---------------- Indore ----------------
  { id: 25, name: "Bombay Hospital Indore", city: "Indore", address: "Rasoma Square, Indore", slots: 14, rating: 4.5 },
  { id: 26, name: "Choithram Hospital", city: "Indore", address: "Manik Bagh Road, Indore", slots: 12, rating: 4.4 },

  // ---------------- Nagpur ----------------
  { id: 27, name: "Orange City Hospital", city: "Nagpur", address: "Khamla, Nagpur", slots: 10, rating: 4.3 },
  { id: 28, name: "Wockhardt Hospital", city: "Nagpur", address: "Shankar Nagar, Nagpur", slots: 12, rating: 4.4 },

  // ---------------- Surat ----------------
  { id: 29, name: "Sunshine Global Hospital", city: "Surat", address: "Adajan, Surat", slots: 12, rating: 4.3 },
  { id: 30, name: "Apple Hospital", city: "Surat", address: "Udhna Darwaja, Surat", slots: 8, rating: 4.1 },

  // ---------------- Vadodara ----------------
  { id: 31, name: "Sterling Hospital Vadodara", city: "Vadodara", address: "Race Course Road, Vadodara", slots: 10, rating: 4.2 },
  { id: 32, name: "Sunshine Hospital Vadodara", city: "Vadodara", address: "Alkapuri, Vadodara", slots: 9, rating: 4.1 },

  // ---------------- Chandigarh ----------------
  { id: 33, name: "PGIMER Chandigarh", city: "Chandigarh", address: "Sector 12, Chandigarh", slots: 18, rating: 4.8 },
  { id: 34, name: "Fortis Hospital Mohali", city: "Chandigarh", address: "Sector 62, Mohali", slots: 14, rating: 4.6 },

  // ---------------- Ludhiana ----------------
  { id: 35, name: "Dayanand Medical College", city: "Ludhiana", address: "Tagore Nagar, Ludhiana", slots: 12, rating: 4.4 },
  { id: 36, name: "Christian Medical College", city: "Ludhiana", address: "Brown Road, Ludhiana", slots: 18, rating: 4.7 },

  // ---------------- Amritsar ----------------
  { id: 37, name: "Guru Nanak Dev Hospital", city: "Amritsar", address: "Majitha Road, Amritsar", slots: 12, rating: 4.3 },
  { id: 38, name: "Fortis Escorts Amritsar", city: "Amritsar", address: "Mall Road, Amritsar", slots: 10, rating: 4.2 },

  // ---------------- Dehradun ----------------
  { id: 39, name: "Max Super Specialty Dehradun", city: "Dehradun", address: "Mussorie Diversion Road, Dehradun", slots: 12, rating: 4.4 },
  { id: 40, name: "Synergy Hospital", city: "Dehradun", address: "Ballupur Chowk, Dehradun", slots: 8, rating: 4.2 },

  // ---------------- Haridwar ----------------
  { id: 41, name: "Rama Hospital Haridwar", city: "Haridwar", address: "Ranipur More, Haridwar", slots: 7, rating: 4.0 },
  { id: 42, name: "Metro Hospital Haridwar", city: "Haridwar", address: "BHEL Township, Haridwar", slots: 9, rating: 4.1 },

  // ---------------- Guwahati ----------------
  { id: 43, name: "GNRC Hospital", city: "Guwahati", address: "Dispur, Guwahati", slots: 10, rating: 4.2 },
  { id: 44, name: "Apollo Hospitals Guwahati", city: "Guwahati", address: "Christian Basti, Guwahati", slots: 12, rating: 4.4 },

  // ---------------- Shillong ----------------
  { id: 45, name: "Nazareth Hospital", city: "Shillong", address: "Laitumkhrah, Shillong", slots: 8, rating: 4.1 },
  { id: 46, name: "Bethany Hospital", city: "Shillong", address: "Mawpat, Shillong", slots: 7, rating: 4.0 },

  // ---------------- Agartala ----------------
  { id: 47, name: "IGM Hospital", city: "Agartala", address: "Indranagar, Agartala", slots: 9, rating: 4.0 },
  { id: 48, name: "Tripura Medical College", city: "Agartala", address: "Hapania, Agartala", slots: 11, rating: 4.2 },

  // ---------------- Ranchi ----------------
  { id: 49, name: "Rajendra Institute of Medical Sciences", city: "Ranchi", address: "Bariatu, Ranchi", slots: 18, rating: 4.7 },
  { id: 50, name: "Medanta Hospital Ranchi", city: "Ranchi", address: "Pahari Mandir Road, Ranchi", slots: 12, rating: 4.5 },

  // ---------------- Raipur ----------------
  { id: 51, name: "AIIMS Raipur", city: "Raipur", address: "GE Road, Tatibandh, Raipur", slots: 16, rating: 4.6 },
  { id: 52, name: "Ramkrishna Care Hospital", city: "Raipur", address: "Pachpedi Naka, Raipur", slots: 12, rating: 4.3 },

  // ---------------- Bhubaneswar ----------------
  { id: 53, name: "KIMS Hospital", city: "Bhubaneswar", address: "KIIT Campus, Bhubaneswar", slots: 14, rating: 4.7 },
  { id: 54, name: "SUM Ultimate Medicare", city: "Bhubaneswar", address: "Khandagiri, Bhubaneswar", slots: 12, rating: 4.6 },

  // ---------------- Cuttack ----------------
  { id: 55, name: "SCB Medical College", city: "Cuttack", address: "Mangalabag, Cuttack", slots: 18, rating: 4.7 },
  { id: 56, name: "Shanti Memorial Hospital", city: "Cuttack", address: "Arunodaya Nagar, Cuttack", slots: 10, rating: 4.4 },

  // ---------------- Puri ----------------
  { id: 57, name: "District Headquarters Hospital Puri", city: "Puri", address: "Grand Road, Puri", slots: 10, rating: 4.2 },
  { id: 58, name: "Sri Jagannath Hospital", city: "Puri", address: "Badasankha, Puri", slots: 9, rating: 4.3 },

  // ---------------- Mysuru ----------------
  { id: 59, name: "JSS Hospital Mysuru", city: "Mysuru", address: "Ramanuja Road, Mysuru", slots: 14, rating: 4.5 },
  { id: 60, name: "Apollo BGS Hospitals", city: "Mysuru", address: "Adichunchanagiri Road, Mysuru", slots: 12, rating: 4.4 }
];