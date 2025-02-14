import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import mobileAppShowcase from '../images/mobile-app-showcase.png';

const ReferAndEarn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: '',
    selectedCourse: 'Web Development'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.referrerName) newErrors.referrerName = 'Required';
    if (!formData.referrerEmail) {
      newErrors.referrerEmail = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
      newErrors.referrerEmail = 'Invalid email';
    }
    if (!formData.refereeName) newErrors.refereeName = 'Required';
    if (!formData.refereeEmail) {
      newErrors.refereeEmail = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
      newErrors.refereeEmail = 'Invalid email';
    }
    if (!formData.refereePhone) {
      newErrors.refereePhone = 'Required';
    } else if (!/^\d{10}$/.test(formData.refereePhone)) {
      newErrors.refereePhone = 'Invalid phone number (10 digits required)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setFormData({
          referrerName: '',
          referrerEmail: '',
          refereeName: '',
          refereeEmail: '',
          refereePhone: '',
          selectedCourse: 'Web Development'
        });
      }, 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">EduReward</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Learn <br/> & Earn
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Get a reward worth up to <span className="text-blue-600 font-semibold">₹15,000</span>
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold
                       hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl
                       flex items-center gap-2 transform hover:-translate-y-1"
            >
              Refer Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -z-10 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl right-0 top-0"></div>
            <img 
              src={mobileAppShowcase}
              alt="Mobile app showcase" 
              className="w-full max-w-md mx-auto relative z-10"
            />
            <div className="absolute -z-10 w-64 h-64 bg-green-100 rounded-full opacity-50 blur-3xl left-0 bottom-0"></div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-24 md:mt-32">
          <h2 className="text-3xl font-bold text-center mb-16">How Do I Start?</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -z-10"></div>
            
            <div className="text-center relative">
              <div className="bg-white border-2 border-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-xl font-semibold">1</span>
              </div>
              <p className="text-gray-700 font-medium">Share with friends</p>
            </div>

            <div className="text-center relative">
              <div className="bg-white border-2 border-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-xl font-semibold">2</span>
              </div>
              <p className="text-gray-700 font-medium">Friend enrolls in course</p>
            </div>

            <div className="text-center relative">
              <div className="bg-white border-2 border-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-xl font-semibold">3</span>
              </div>
              <p className="text-gray-700 font-medium">You earn rewards</p>
            </div>
          </div>
        </div>

        {/* Rewards Table Section */}
        <div className="mt-24 md:mt-32">
          <h2 className="text-3xl font-bold mb-12">What are the Reward benefits?</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-6 text-left text-gray-600 font-semibold border-b">Course Name</th>
                  <th className="p-6 text-left text-gray-600 font-semibold border-b">Course Fee</th>
                  <th className="p-6 text-left text-gray-600 font-semibold border-b">Reward Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Web Development
                    </div>
                  </td>
                  <td className="p-6 border-b">₹15,000</td>
                  <td className="p-6 border-b text-blue-600 font-semibold">₹1,500</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Data Science
                    </div>
                  </td>
                  <td className="p-6 border-b">₹20,000</td>
                  <td className="p-6 border-b text-blue-600 font-semibold">₹2,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Full Stack Development
                    </div>
                  </td>
                  <td className="p-6 border-b">₹25,000</td>
                  <td className="p-6 border-b text-blue-600 font-semibold">₹2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 md:mt-32 mb-16">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">How does this program work?</h3>
              <p className="text-gray-600">Share your referral link with friends. When they enroll, you get rewarded!</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">When will I receive my reward?</h3>
              <p className="text-gray-600">Rewards are processed within 7 days of your friend's successful enrollment.</p>
            </div>
            <div className="pb-4">
              <h3 className="text-lg font-semibold mb-2">Is there a limit to how many friends I can refer?</h3>
              <p className="text-gray-600">No, you can refer as many friends as you want and earn rewards for each successful enrollment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full relative">
            <button 
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-8">Refer a Friend</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white
                                  transition-colors duration-200
                                  ${errors.referrerName ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Enter your name"
                      />
                      {errors.referrerName && (
                        <p className="text-red-500 text-sm mt-1">{errors.referrerName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email*
                      </label>
                      <input
                        type="email"
                        name="referrerEmail"
                        value={formData.referrerEmail}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white
                                  transition-colors duration-200
                                  ${errors.referrerEmail ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Enter your email"
                      />
                      {errors.referrerEmail && (
                        <p className="text-red-500 text-sm mt-1">{errors.referrerEmail}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Friend's Name*
                      </label>
                      <input
                        type="text"
                        name="refereeName"
                        value={formData.refereeName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white
                                  transition-colors duration-200
                                  ${errors.refereeName ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Enter friend's name"
                      />
                      {errors.refereeName && (
                        <p className="text-red-500 text-sm mt-1">{errors.refereeName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Friend's Email*
                      </label>
                      <input
                        type="email"
                        name="refereeEmail"
                        value={formData.refereeEmail}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white
                                  transition-colors duration-200
                                  ${errors.refereeEmail ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Enter friend's email"
                      />
                      {errors.refereeEmail && (
                        <p className="text-red-500 text-sm mt-1">{errors.refereeEmail}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Friend's Phone*
                      </label>
                      <input
                        type="tel"
                        name="refereePhone"
                        value={formData.refereePhone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white
                                  transition-colors duration-200
                                  ${errors.refereePhone ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Enter friend's phone"
                      />
                      {errors.refereePhone && (
                        <p className="text-red-500 text-sm mt-1">{errors.refereePhone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course
                      </label>
                      <select
                        name="selectedCourse"
                        value={formData.selectedCourse}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white
                                transition-colors duration-200"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Full Stack Development">Full Stack Development</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold
                              hover:bg-blue-700 transition-all duration-200 mt-8
                              shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Submit Referral
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h2 className="text-2xl font-bold mb-2">Referral Submitted!</h2>
                  <p className="text-gray-600">Thank you for referring your friend.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferAndEarn;