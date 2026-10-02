"use client";

import { useState } from "react";
import { useCMS } from "@/lib/cms-store";
import {
  SectionCard,
  FormField,
  TextInput,
  TextArea,
  ActionBar,
  SaveToast,
} from "@/components/admin/FormElements";

export default function WorkProcessEditor() {
  const { workProcess, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(workProcess);
  const [showToast, setShowToast] = useState(false);

  const updateStep = (index: number, key: string, value: string) => {
    const updated = [...form];
    updated[index] = { ...updated[index], [key]: value };
    setForm(updated);
  };

  const handleSave = () => {
    updateSection("workProcess", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("workProcess");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {form.map((step, index) => (
        <SectionCard
          key={step.id}
          title={`Langkah ${step.stepNumber}: ${step.title || "..."}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Nomor Langkah">
              <TextInput
                value={step.stepNumber}
                onChange={(v) => updateStep(index, "stepNumber", v)}
              />
            </FormField>
            <FormField label="Nama Icon" hint="Lucide icon name">
              <TextInput
                value={step.iconName}
                onChange={(v) => updateStep(index, "iconName", v)}
              />
            </FormField>
          </div>
          <FormField label="Judul">
            <TextInput
              value={step.title}
              onChange={(v) => updateStep(index, "title", v)}
            />
          </FormField>
          <FormField label="Deskripsi">
            <TextArea
              value={step.description}
              onChange={(v) => updateStep(index, "description", v)}
              rows={3}
            />
          </FormField>
        </SectionCard>
      ))}

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
