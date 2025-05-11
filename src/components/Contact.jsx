import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentHover});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactSection = styled(motion.section)`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent}11, transparent);
    pointer-events: none;
  }
`;

const Container = styled.div`
  padding: clamp(2rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: clamp(1.5rem, 3vw, 2.5rem);
  }
`;

const FormContainer = styled(motion.form)`
  background: ${({ theme }) => theme.background};
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 20px;
  box-shadow: 0 8px 32px ${({ theme }) => theme.shadow};
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  width: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.shadow};
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const InputGroup = styled.div`
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
`;

const Label = styled.label`
  display: block;
  margin-bottom: clamp(0.3rem, 2vw, 0.5rem);
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const Input = styled.input`
  width: 100%;
  padding: clamp(1rem, 2.5vw, 1.2rem);
  border: 2px solid ${({ theme, error }) => error ? theme.error : theme.border};
  border-radius: 15px;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: clamp(1rem, 2vw, 1.1rem);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transform-origin: top left;
  will-change: transform, opacity;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.accent}22;
    transform: scale(1.01);
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent}99;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    opacity: 0.7;
  }

  @media (hover: none) {
    font-size: 16px;
  }
`

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
  transition: min-height 0.3s ease;
  
  &:focus {
    min-height: 200px;
  }
`;

const ErrorMessage = styled(motion.span)`
  color: ${({ theme }) => theme.error};
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
`;

const LoadingSpinner = styled(motion.span)`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
  vertical-align: middle;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: clamp(1rem, 3vw, 1.2rem);
  background: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: ${({ theme }) => theme.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.accent}44;
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    background: ${({ theme }) => theme.accent}99;
  }

  @media (hover: none) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  color: ${({ theme }) => theme.success};
  padding: clamp(1rem, 3vw, 1.2rem);
  margin-top: clamp(1rem, 3vw, 1.5rem);
  border-radius: 12px;
  background: ${({ theme }) => `${theme.success}11`};
  backdrop-filter: blur(4px);
  border: 1px solid ${({ theme }) => `${theme.success}22`};
  box-shadow: 0 4px 12px ${({ theme }) => `${theme.success}11`};
`;

const ContactInfo = styled.div`
  padding: clamp(2rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background: ${({ theme }) => theme.accent}11;

  @media (max-width: 768px) {
    padding: clamp(1.5rem, 3vw, 2.5rem);
    text-align: center;
  }
`;

const InfoTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accent};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <ContactSection id="contact">
      <ContactInfo>
        <div>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </Title>
          <InfoText>
            We're here to help bring your creative vision to life. Whether you have a project in mind
            or just want to learn more about our services, we'd love to hear from you.
          </InfoText>
        </div>
        <div>
          <InfoTitle>Contact Information</InfoTitle>
          <ContactMethod>
            <Icon>📧</Icon>
            <InfoText style={{ margin: 0 }}>info@creativeagency.com</InfoText>
          </ContactMethod>
          <ContactMethod>
            <Icon>📱</Icon>
            <InfoText style={{ margin: 0 }}>+1 (555) 123-4567</InfoText>
          </ContactMethod>
          <ContactMethod>
            <Icon>📍</Icon>
            <InfoText style={{ margin: 0 }}>123 Creative Street, Design City, DC 12345</InfoText>
          </ContactMethod>
        </div>
      </ContactInfo>
      <Container>

        <FormContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            {errors.name && (
              <ErrorMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.name}
              </ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            {errors.email && (
              <ErrorMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.email}
              </ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />
            {errors.message && (
              <ErrorMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.message}
              </ErrorMessage>
            )}
          </InputGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{isSubmitting ? 'Sending' : 'Send Message'}</span>
          {isSubmitting && <LoadingSpinner />}
          </SubmitButton>

          {isSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
        </FormContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;