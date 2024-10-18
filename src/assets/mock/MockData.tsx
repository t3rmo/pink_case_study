export const MOCKPATIENT_1 = {
  resourceType: "Patient",
  id: "patient1",
  name: [
    {
      use: "official",
      family: "Davis",
      given: ["Alice"],
    },
  ],
  gender: "female",
  birthDate: "1978-03-09",
  address: [
    {
      use: "home",
      line: ["321 Pine St"],
      city: "Gotham",
      state: "NJ",
      postalCode: "07001",
    },
  ],
};

export const MOCKPATIENT_2 = {
  resourceType: "Patient",
  id: "patient2",
  name: [
    {
      use: "official",
      family: "Doe",
      given: ["John"],
    },
  ],
  gender: "male",
  birthDate: "1980-04-01",
  address: [
    {
      use: "home",
      line: ["123 Main St"],
      city: "Somewhere",
      state: "CA",
      postalCode: "90210",
    },
  ],
};

export const MOCKPATIENT_3 = {
  resourceType: "Patient",
  id: "patient3",
  name: [
    {
      use: "official",
      family: "Johnson",
      given: ["Robert"],
    },
  ],
  gender: "male",
  birthDate: "1990-12-15",
  address: [
    {
      use: "home",
      line: ["789 Oak St"],
      city: "Metropolis",
      state: "NY",
      postalCode: "10001",
    },
  ],
};

export const MOCKPATIENT_LIST = [MOCKPATIENT_1, MOCKPATIENT_2, MOCKPATIENT_3];
