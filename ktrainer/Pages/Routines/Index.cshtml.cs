using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Ktrainer.Data;
using Ktrainer.Models;

namespace Ktrainer.Pages.Routines
{
    public class IndexModel : PageModel
    {
        private readonly Ktrainer.Data.ApplicationDbContext _context;

        public IndexModel(Ktrainer.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public IList<Routine> Routine { get;set; }

        public async Task OnGetAsync()
        {
            Routine = await _context.Routine.ToListAsync();
        }
    }
}
