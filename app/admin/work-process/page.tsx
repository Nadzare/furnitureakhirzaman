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
    <div className="space-y-6 max-w-4xl min-w-0">
      {form.map((step, index) => (
        <SectionCard
          key={step.id}
          title={`Langkah ${step.stepNumber}: ${step.title || "..."}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <FormField label="Nomor Langkah">
              <TextInput
                value={step.stepNumber}
                onChange={(v) => updateStep(index, "stepNumber", v)}
                placeholder="01"
              />
            </FormField>
            <FormField label="Nama Icon" hint="Lucide icon name">
              <TextInput
                value={step.iconName}
                onChange={(v) => updateStep(index, "iconName", v)}
                placeholder="MessageSquare, Compass..."
              />
            </FormField>
          </div>
          <FormField label="Judul Langkah">
            <TextInput
              value={step.title}
              onChange={(v) => updateStep(index, "title", v)}
              placeholder="Konsultasi & Pengukuran..."
            />
          </FormField>
          <FormField label="Deskripsi">
            <TextArea
              value={step.description}
              onChange={(v) => updateStep(index, "description", v)}
              rows={3}
              placeholder="Penjelasan proses pada tahap ini..."
            />
          </FormField>
        </SectionCard>
      ))}

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
