// state-city.model.ts

export interface StateCity {
    state: string;
    cities: string[];
  }
  
  // Example of all states in India with corresponding cities
  export const INDIAN_STATES: StateCity[] = [
    { state: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore'] },
    { state: 'Arunachal Pradesh', cities: ['Itanagar', 'Pasighat', 'Naharlagun', 'Tezpur', 'Ziro'] },
    { state: 'Assam', cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Nagaon', 'Tezpur'] },
    { state: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga'] },
    { state: 'Chhattisgarh', cities: ['Raipur', 'Bilaspur', 'Durg', 'Bhilai', 'Korba'] },
    { state: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Ponda', 'Mapusa'] },
    { state: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'] },
    { state: 'Haryana', cities: ['Gurugram', 'Faridabad', 'Ambala', 'Hisar', 'Panchkula'] },
    { state: 'Himachal Pradesh', cities: ['Shimla', 'Dharamshala', 'Manali', 'Kullu', 'Solan'] },
    { state: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar'] },
    { state: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Mangalore', 'Hubli', 'Dharwad'] },
    { state: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kottayam', 'Malappuram'] },
    { state: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Gwalior', 'Ujjain', 'Sagar'] },
    { state: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane'] },
    { state: 'Manipur', cities: ['Imphal', 'Kakching', 'Thoubal', 'Churachandpur', 'Bishnupur'] },
    { state: 'Meghalaya', cities: ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Williamnagar'] },
    { state: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Champhai', 'Kolasib', 'Serchhip'] },
    { state: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha', 'Phek'] },
    { state: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Berhampur', 'Rourkela', 'Sambalpur'] },
    { state: 'Punjab', cities: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'] },
    { state: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Ajmer', 'Bikaner'] },
    { state: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Rangpo'] },
    { state: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'] },
    { state: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Mahbubnagar'] },
    { state: 'Tripura', cities: ['Agartala', 'Dharmanagar', 'Ambassa', 'Udaipur', 'Kailashahar'] },
    { state: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut'] },
    { state: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Nainital', 'Rudrapur', 'Roorkee'] },
    { state: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol'] },
  ];
  