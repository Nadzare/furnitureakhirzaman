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
    <div className="space-y-6 max-w-4xl min-w-0">
      <SectionCard
        title="Daftar Layanan"
        description={`Total: ${form.length} layanan aktif`}
      >
        <div className="space-y-2.5 sm:space-y-3">
          {form.map((service, index) => (
            <div
              key={service.id}
              className="border border-[#E8E1D8] rounded-xl overflow-hidden bg-white shadow-2xs"
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
                className="w-full flex items-center justify-between px-3 sm:px-4 py-3 bg-[#FAFAF8] hover:bg-[#F5F3F0] transition-colors cursor-pointer gap-2"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-[10px] font-sans font-bold text-[#B08B57] bg-[#B08B57]/10 px-2 py-0.5 rounded flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-[#3A2F26]/75 truncate max-w-[160px] xs:max-w-[240px] sm:max-w-none">
                    {service.title || "Layanan Baru"}
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeService(index);
                    }}
                    aria-label={`Hapus layanan ${service.title || index + 1}`}
                    className="p-1.5 sm:p-2 text-[#3A2F26]/30 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="p-1 text-[#3A2F26]/30">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              {expandedIndex === index && (
                <div className="px-3.5 sm:px-5 py-4 sm:py-5 space-y-3.5 sm:space-y-4 border-t border-[#E8E1D8] bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <FormField label="Judul Layanan">
                      <TextInput
                        value={service.title}
                        onChange={(v) => updateService(index, "title", v)}
                        placeholder="Contoh: Custom Furniture"
                      />
                    </FormField>
                    <FormField label="Nama Icon" hint="Nama icon Lucide React">
                      <TextInput
                        value={service.iconName}
                        onChange={(v) => updateService(index, "iconName", v)}
                        placeholder="PenTool, Sofa, Paintbrush..."
                      />
                    </FormField>
                  </div>
                  <FormField label="Deskripsi Layanan">
                    <TextArea
                      value={service.description}
                      onChange={(v) => updateService(index, "description", v)}
                      rows={3}
                      placeholder="Jelaskan detail layanan..."
                    />
                  </FormField>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addService}
          className="flex items-center gap-2 text-[#B08B57] text-sm font-sans font-medium hover:text-[#C4A26F] transition-colors cursor-pointer mt-3 pt-1"
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
