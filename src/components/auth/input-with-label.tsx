/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { LabelInputContainer } from './label-input-container'
import { Label } from '../aceternity-UI/label'
import { Input } from '../aceternity-UI/input'

type InputWithLabelProps = {
  id: string
  label: string
  placeholder: string
  type?: string
  className?: string
  register?: any
  error?: string
}

export const InputWithLabel = ({
  id,
  label,
  placeholder,
  type = 'text',
  className,
  register,
  error,
}: InputWithLabelProps) => {
  return (
    <LabelInputContainer className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} type={type} {...register(id)} />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </LabelInputContainer>
  )
}
