'use client'

import React, { useState } from 'react'

// Simple client-side form handling without server dependencies
export function useClientForm(initialData: any) {
  const [formData, setFormData] = useState(initialData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent, onSuccess?: () => void) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission for demo purposes
    setTimeout(() => {
      setIsSubmitting(false)
      if (onSuccess) onSuccess()
      // In production, this would send to your form handling service
      alert('Thank you! Your form has been submitted. We will contact you soon.')
      setFormData(initialData)
    }, 1000)
  }

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    setFormData
  }
}

export function useClientToast() {
  return {
    toast: ({ title, description, variant }: any) => {
      if (variant === 'destructive') {
        alert(`Error: ${description}`)
      } else {
        alert(`${title}: ${description}`)
      }
    }
  }
}