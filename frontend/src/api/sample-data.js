const SAMPLE_REGISTRATIONS = [
  {
    id: 'a1b2c3d4-0001-4000-8000-000000000001',
    registrationNumber: 'CS27-0001',
    registrationDate: '2027-02-10T08:30:00Z',
    participantName: 'Juan Dela Cruz',
    contactNumber: '09171234567',
    email: 'juan.delacruz@example.com',
    address: '123 Rizal St., Sorsogon City',
    carMakeModel: 'Toyota Supra MK4',
    plateNumber: 'ABC 1234',
    registrationType: 'Competitor',
    status: 'Confirmed',
    registrationFee: 2500.00,
    amountPaid: 1000.00,
    paymentStatus: 'Partial'
  },
  {
    id: 'a1b2c3d4-0002-4000-8000-000000000002',
    registrationNumber: 'CS27-0002',
    registrationDate: '2027-02-10T09:15:00Z',
    participantName: 'Maria Clara Santos',
    contactNumber: '09182345678',
    email: 'maria.santos@example.com',
    address: '45 Quezon St., Gubat, Sorsogon',
    carMakeModel: 'Honda Civic Type R FK8',
    plateNumber: 'XYZ 5678',
    registrationType: 'VIP',
    status: 'CheckedIn',
    registrationFee: 5000.00,
    amountPaid: 5000.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0003-4000-8000-000000000003',
    registrationNumber: 'CS27-0003',
    registrationDate: '2027-02-10T10:00:00Z',
    participantName: 'Rafael Mendoza',
    contactNumber: '09193456789',
    email: 'raf.mendoza@example.com',
    address: '78 Magsaysay Ave., Naga City',
    carMakeModel: 'Nissan Skyline GT-R R34',
    plateNumber: 'GTR 1999',
    registrationType: 'VIP',
    status: 'Confirmed',
    registrationFee: 5000.00,
    amountPaid: 5000.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0004-4000-8000-000000000004',
    registrationNumber: 'CS27-0004',
    registrationDate: '2027-02-10T11:20:00Z',
    participantName: 'Paolo Reyes',
    contactNumber: '09204567890',
    email: 'paolo.reyes@example.com',
    address: '12 Luna St., Legazpi City',
    carMakeModel: 'Mazda RX-7 FD3S',
    plateNumber: 'ROT 0007',
    registrationType: 'Exhibitor',
    status: 'Pending',
    registrationFee: 1500.00,
    amountPaid: 0.00,
    paymentStatus: 'Unpaid'
  },
  {
    id: 'a1b2c3d4-0005-4000-8000-000000000005',
    registrationNumber: 'CS27-0005',
    registrationDate: '2027-02-11T08:45:00Z',
    participantName: 'Camille Bautista',
    contactNumber: '09215678901',
    email: 'camille.b@example.com',
    address: '89 Bonifacio St., Irosin, Sorsogon',
    carMakeModel: 'Subaru WRX STI',
    plateNumber: 'SUB 2020',
    registrationType: 'Competitor',
    status: 'CheckedIn',
    registrationFee: 2500.00,
    amountPaid: 2500.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0006-4000-8000-000000000006',
    registrationNumber: 'CS27-0006',
    registrationDate: '2027-02-11T09:30:00Z',
    participantName: 'Angelo Villanueva',
    contactNumber: '09226789012',
    email: 'angelo.v@example.com',
    address: '34 Burgos St., Bulan, Sorsogon',
    carMakeModel: 'Mitsubishi Lancer Evo IX',
    plateNumber: 'EVO 0009',
    registrationType: 'Competitor',
    status: 'Confirmed',
    registrationFee: 2500.00,
    amountPaid: 1500.00,
    paymentStatus: 'Partial'
  },
  {
    id: 'a1b2c3d4-0007-4000-8000-000000000007',
    registrationNumber: 'CS27-0007',
    registrationDate: '2027-02-11T10:50:00Z',
    participantName: 'Bianca Navarro',
    contactNumber: '09237890123',
    email: 'bianca.nav@example.com',
    address: '56 Mabini St., Daraga, Albay',
    carMakeModel: 'Porsche 911 Carrera S',
    plateNumber: 'POR 0911',
    registrationType: 'VIP',
    status: 'CheckedIn',
    registrationFee: 5000.00,
    amountPaid: 5000.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0008-4000-8000-000000000008',
    registrationNumber: 'CS27-0008',
    registrationDate: '2027-02-11T13:10:00Z',
    participantName: 'Jericho Ramos',
    contactNumber: '09248901234',
    email: 'jericho.ramos@example.com',
    address: '101 Del Pilar St., Sorsogon City',
    carMakeModel: 'Toyota GR86',
    plateNumber: 'GR8 6086',
    registrationType: 'Exhibitor',
    status: 'Cancelled',
    registrationFee: 1500.00,
    amountPaid: 0.00,
    paymentStatus: 'Unpaid'
  },
  {
    id: 'a1b2c3d4-0009-4000-8000-000000000009',
    registrationNumber: 'CS27-0009',
    registrationDate: '2027-02-12T08:15:00Z',
    participantName: 'Katrina Aquino',
    contactNumber: '09259012345',
    email: 'kat.aquino@example.com',
    address: '22Aguinaldo Hwy, Tabaco City',
    carMakeModel: 'Ford Mustang GT 5.0',
    plateNumber: 'MUS 5000',
    registrationType: 'VIP',
    status: 'Confirmed',
    registrationFee: 5000.00,
    amountPaid: 2500.00,
    paymentStatus: 'Partial'
  },
  {
    id: 'a1b2c3d4-0010-4000-8000-000000000010',
    registrationNumber: 'CS27-0010',
    registrationDate: '2027-02-12T09:40:00Z',
    participantName: 'Dominic Torres',
    contactNumber: '09260123456',
    email: 'dom.torres@example.com',
    address: '67 Zamora St., Casiguran, Sorsogon',
    carMakeModel: 'Honda S2000 AP2',
    plateNumber: 'S2K 9000',
    registrationType: 'Competitor',
    status: 'Confirmed',
    registrationFee: 2500.00,
    amountPaid: 2500.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0011-4000-8000-000000000011',
    registrationNumber: 'CS27-0011',
    registrationDate: '2027-02-12T11:05:00Z',
    participantName: 'Gabriel Castillo',
    contactNumber: '09271234567',
    email: 'gab.castillo@example.com',
    address: '14 Lopez Jaena St., Castilla, Sorsogon',
    carMakeModel: 'Nissan 370Z Nismo',
    plateNumber: 'NIS 3700',
    registrationType: 'Exhibitor',
    status: 'Pending',
    registrationFee: 1500.00,
    amountPaid: 500.00,
    paymentStatus: 'Partial'
  },
  {
    id: 'a1b2c3d4-0012-4000-8000-000000000012',
    registrationNumber: 'CS27-0012',
    registrationDate: '2027-02-12T14:20:00Z',
    participantName: 'Patricia Morales',
    contactNumber: '09282345678',
    email: 'pat.morales@example.com',
    address: '90 Gomez St., Pilar, Sorsogon',
    carMakeModel: 'BMW M3 Competition G80',
    plateNumber: 'BMW 0080',
    registrationType: 'VIP',
    status: 'CheckedIn',
    registrationFee: 5000.00,
    amountPaid: 5000.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0013-4000-8000-000000000013',
    registrationNumber: 'CS27-0013',
    registrationDate: '2027-02-13T08:00:00Z',
    participantName: 'Lorenzo Fernandez',
    contactNumber: '09293456789',
    email: 'enzo.fernandez@example.com',
    address: '55 Roxas Blvd., Sorsogon City',
    carMakeModel: 'Toyota Celica GT-Four',
    plateNumber: 'CEL 1994',
    registrationType: 'Exhibitor',
    status: 'Confirmed',
    registrationFee: 1500.00,
    amountPaid: 1500.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0014-4000-8000-000000000014',
    registrationNumber: 'CS27-0014',
    registrationDate: '2027-02-13T09:50:00Z',
    participantName: 'Sophia Cruz',
    contactNumber: '09304567890',
    email: 'sophia.cruz@example.com',
    address: '19 Lapu-Lapu St., Legazpi City',
    carMakeModel: 'Audi RS5 Coupe',
    plateNumber: 'AUD 0005',
    registrationType: 'VIP',
    status: 'Pending',
    registrationFee: 5000.00,
    amountPaid: 0.00,
    paymentStatus: 'Unpaid'
  },
  {
    id: 'a1b2c3d4-0015-4000-8000-000000000015',
    registrationNumber: 'CS27-0015',
    registrationDate: '2027-02-13T11:30:00Z',
    participantName: 'Christian Navarro',
    contactNumber: '09315678901',
    email: 'chris.nav@example.com',
    address: '82 Jacinto St., Gubat, Sorsogon',
    carMakeModel: 'Honda Civic SiR EK4',
    plateNumber: 'SIR 1999',
    registrationType: 'Competitor',
    status: 'CheckedIn',
    registrationFee: 2500.00,
    amountPaid: 2500.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0016-4000-8000-000000000016',
    registrationNumber: 'CS27-0016',
    registrationDate: '2027-02-13T15:00:00Z',
    participantName: 'Nathaniel Bautista',
    contactNumber: '09326789012',
    email: 'nate.b@example.com',
    address: '41 Tandang Sora St., Naga City',
    carMakeModel: 'Chevrolet Camaro ZL1',
    plateNumber: 'CAM 0650',
    registrationType: 'VIP',
    status: 'Cancelled',
    registrationFee: 5000.00,
    amountPaid: 1000.00,
    paymentStatus: 'Partial'
  },
  {
    id: 'a1b2c3d4-0017-4000-8000-000000000017',
    registrationNumber: 'CS27-0017',
    registrationDate: '2027-02-14T08:40:00Z',
    participantName: 'Danielle Rivera',
    contactNumber: '09337890123',
    email: 'dani.rivera@example.com',
    address: '73 Bonifacio St., Juban, Sorsogon',
    carMakeModel: 'Mazda MX-5 Miata ND',
    plateNumber: 'MX5 2022',
    registrationType: 'Exhibitor',
    status: 'Confirmed',
    registrationFee: 1500.00,
    amountPaid: 1500.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0018-4000-8000-000000000018',
    registrationNumber: 'CS27-0018',
    registrationDate: '2027-02-14T10:15:00Z',
    participantName: 'Miguelito Soriano',
    contactNumber: '09348901234',
    email: 'migs.soriano@example.com',
    address: '29 P. Burgos St., Sorsogon City',
    carMakeModel: 'Toyota AE86 Sprinter Trueno',
    plateNumber: 'TOF 0086',
    registrationType: 'Competitor',
    status: 'Confirmed',
    registrationFee: 2500.00,
    amountPaid: 2000.00,
    paymentStatus: 'Partial'
  },
  {
    id: 'a1b2c3d4-0019-4000-8000-000000000019',
    registrationNumber: 'CS27-0019',
    registrationDate: '2027-02-14T13:45:00Z',
    participantName: 'Andrea Mercado',
    contactNumber: '09359012345',
    email: 'andrea.m@example.com',
    address: '64 Mabini St., Barcelona, Sorsogon',
    carMakeModel: 'Subaru BRZ tS',
    plateNumber: 'BRZ 2024',
    registrationType: 'Exhibitor',
    status: 'Pending',
    registrationFee: 1500.00,
    amountPaid: 0.00,
    paymentStatus: 'Unpaid'
  },
  {
    id: 'a1b2c3d4-0020-4000-8000-000000000020',
    registrationNumber: 'CS27-0020',
    registrationDate: '2027-02-15T09:00:00Z',
    participantName: 'Vincent Pangilinan',
    contactNumber: '09360123456',
    email: 'vince.p@example.com',
    address: '108 Rizal St., Sorsogon City',
    carMakeModel: 'Mitsubishi Eclipse GSX',
    plateNumber: 'ECL 1998',
    registrationType: 'Competitor',
    status: 'CheckedIn',
    registrationFee: 2500.00,
    amountPaid: 2500.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0021-4000-8000-000000000021',
    registrationNumber: 'CS27-0021',
    registrationDate: '2027-02-15T10:30:00Z',
    participantName: 'Clarissa Dizon',
    contactNumber: '09371234567',
    email: 'clarissa.dizon@example.com',
    address: '37 Quezon Ave., Legazpi City',
    carMakeModel: 'Lexus RC F Track Edition',
    plateNumber: 'LEX 5000',
    registrationType: 'VIP',
    status: 'Confirmed',
    registrationFee: 5000.00,
    amountPaid: 5000.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0022-4000-8000-000000000022',
    registrationNumber: 'CS27-0022',
    registrationDate: '2027-02-15T12:15:00Z',
    participantName: 'Sebastian Alcantara',
    contactNumber: '09382345678',
    email: 'seb.alcantara@example.com',
    address: '51 Magallanes St., Magallanes, Sorsogon',
    carMakeModel: 'Nissan Silvia S15 Spec-R',
    plateNumber: 'SIL 0015',
    registrationType: 'Competitor',
    status: 'Pending',
    registrationFee: 2500.00,
    amountPaid: 1000.00,
    paymentStatus: 'Partial'
  },
  {
    id: 'a1b2c3d4-0023-4000-8000-000000000023',
    registrationNumber: 'CS27-0023',
    registrationDate: '2027-02-16T08:50:00Z',
    participantName: 'Bernadette Ocampo',
    contactNumber: '09393456789',
    email: 'berna.ocampo@example.com',
    address: '88 Del Rosario St., Donsol, Sorsogon',
    carMakeModel: 'Volkswagen Golf GTI Mk8',
    plateNumber: 'GTI 0008',
    registrationType: 'Exhibitor',
    status: 'Cancelled',
    registrationFee: 1500.00,
    amountPaid: 0.00,
    paymentStatus: 'Unpaid'
  },
  {
    id: 'a1b2c3d4-0024-4000-8000-000000000024',
    registrationNumber: 'CS27-0024',
    registrationDate: '2027-02-16T11:10:00Z',
    participantName: 'Ferdinand Salcedo',
    contactNumber: '09454567890',
    email: 'ferdie.salcedo@example.com',
    address: '15 Padre Burgos St., Sorsogon City',
    carMakeModel: 'Toyota GR Yaris',
    plateNumber: 'GRY 0300',
    registrationType: 'Competitor',
    status: 'Confirmed',
    registrationFee: 2500.00,
    amountPaid: 2500.00,
    paymentStatus: 'Paid'
  },
  {
    id: 'a1b2c3d4-0025-4000-8000-000000000025',
    registrationNumber: 'CS27-0025',
    registrationDate: '2027-02-16T14:40:00Z',
    participantName: 'Isabella Macapagal',
    contactNumber: '09465678901',
    email: 'isabella.m@example.com',
    address: '99 San Juan St., Prieto Diaz, Sorsogon',
    carMakeModel: 'Honda Integra Type R DC2',
    plateNumber: 'ITR 0002',
    registrationType: 'Exhibitor',
    status: 'Pending',
    registrationFee: 1500.00,
    amountPaid: 0.00,
    paymentStatus: 'Unpaid'
  }
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getRegistrations({
  participantName = '',
  type = '',
  status = '',
  page = 1,
  pageSize = 10
} = {}) {
  await delay(300);

  let filtered = [...SAMPLE_REGISTRATIONS].sort(
    (a, b) => new Date(b.registrationDate) - new Date(a.registrationDate)
  );

  if (participantName.trim()) {
    const query = participantName.trim().toLowerCase();
    filtered = filtered.filter((item) =>
      item.participantName.toLowerCase().includes(query)
    );
  }

  if (type) {
    filtered = filtered.filter((item) => item.registrationType === type);
  }

  if (status) {
    filtered = filtered.filter((item) => item.status === status);
  }

  const totalCount = filtered.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const startIndex = (page - 1) * pageSize;
  const items = filtered.slice(startIndex, startIndex + pageSize);

  return {
    items,
    page,
    pageSize,
    totalCount,
    totalPages
  };
}

export async function getSummary() {
  await delay(250);

  const activeItems = SAMPLE_REGISTRATIONS.filter(
    (item) => item.status !== 'Cancelled'
  );

  const totalFees = activeItems.reduce((sum, item) => sum + item.registrationFee, 0);
  const totalPayments = activeItems.reduce((sum, item) => sum + item.amountPaid, 0);

  return {
    totalRegistrations: SAMPLE_REGISTRATIONS.length,
    confirmed: SAMPLE_REGISTRATIONS.filter((i) => i.status === 'Confirmed').length,
    checkedIn: SAMPLE_REGISTRATIONS.filter((i) => i.status === 'CheckedIn').length,
    pending: SAMPLE_REGISTRATIONS.filter((i) => i.status === 'Pending').length,
    cancelled: SAMPLE_REGISTRATIONS.filter((i) => i.status === 'Cancelled').length,
    totalFees,
    totalPayments,
    uncollectedPayments: totalFees - totalPayments
  };
}