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
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

export default function ServicesEditor() {
  const { services, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(services);
  const [showToast, setShowToast] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const updateService = (index: number, key: string, value: string) => {
    const updated = [...form];
    updated[index] = { ...updated[index], [key]: value };
    setForm(updated);
  };

  const addService = () => {
    const newService = {
      id: `serv-${Date.now()}`,
      title: "",
      description: "",
      iconName: "PenTool",
    };
    setForm([...form, newService]);
    setExpandedIndex(form.length);
  };

  const removeService = (index: number) => {
    setForm(form.filter((_, i) => i !== index));
    setExpandedIndex(null);
  };

  const handleSave = () => {
    updateSection("services", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("services");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <SectionCard
        title="Daftar Layanan"
        description={`Total: ${form.length} layanan`}
      >
        <div className="space-y-3">
          {form.map((service, index) => (
            <div
              key={service.id}
              className="border border-[#E8E1D8] rounded-lg overflow-hidden"
            >
              {/* Collapsed header */}
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpandedIndex(expandedIndex === index ? null : index);
                  }
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#FAFAF8] hover:bg-[#F5F3F0] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-sans font-bold text-[#B08B57]/60 bg-[#B08B57]/10 px-2 py-0.5 rounded">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-sans font-medium text-[#3A2F26]/70">
                    {service.title || "Layanan Baru"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeService(index);
                    }}
                    className="p-1.5 text-[#3A2F26]/20 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-[#3A2F26]/30" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#3A2F26]/30" />
                  )}
                </div>
              </div>

              {/* Expanded content */}
              {expandedIndex === index && (
                <div className="px-4 py-5 space-y-4 border-t border-[#E8E1D8] bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Judul Layanan">
                      <TextInput
                        value={service.title}
                        onChange={(v) => updateService(index, "title", v)}
                      />
                    </FormField>
                    <FormField label="Nama Icon" hint="Lucide icon name">
                      <TextInput
                        value={service.iconName}
                        onChange={(v) => updateService(index, "iconName", v)}
                      />
                    </FormField>
                  </div>
                  <FormField label="Deskripsi">
                    <TextArea
                      value={service.description}
                      onChange={(v) => updateService(index, "description", v)}
                      rows={3}
                    />
                  </FormField>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addService}
          className="flex items-center gap-2 text-[#B08B57] text-sm font-sans font-medium hover:text-[#C4A26F] transition-colors cursor-pointer mt-2"
        >
          <Plus className="w-4 h-4" />
          Tambah Layanan
        </button>
      </SectionCard>

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
