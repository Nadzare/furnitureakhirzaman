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

export default function WhyChooseUsEditor() {
  const { whyChooseUs, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(whyChooseUs);
  const [showToast, setShowToast] = useState(false);

  const updateItem = (index: number, key: string, value: string) => {
    const updated = [...form];
    updated[index] = { ...updated[index], [key]: value };
    setForm(updated);
  };

  const handleSave = () => {
    updateSection("whyChooseUs", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("whyChooseUs");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl min-w-0">
      {form.map((item, index) => (
        <SectionCard
          key={item.id}
          title={item.title || `Keunggulan ${index + 1}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <FormField label="Judul Keunggulan">
              <TextInput
                value={item.title}
                onChange={(v) => updateItem(index, "title", v)}
                placeholder="Custom Desain..."
              />
            </FormField>
            <FormField label="Nama Icon" hint="Lucide icon name">
              <TextInput
                value={item.iconName}
                onChange={(v) => updateItem(index, "iconName", v)}
                placeholder="Sparkles, ShieldCheck..."
              />
            </FormField>
          </div>
          <FormField label="Deskripsi">
            <TextArea
              value={item.description}
              onChange={(v) => updateItem(index, "description", v)}
              rows={3}
              placeholder="Penjelasan keunggulan..."
            />
          </FormField>
        </SectionCard>
      ))}

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
